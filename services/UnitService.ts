import { nanoid } from "@reduxjs/toolkit";
import {
  IUnit,
  ISelectedUnit,
  IUpgradeGains,
  IUpgradeGainsItem,
  IUpgradeGainsRule,
  IUpgradePackage,
  IUpgrade,
  IUpgradeOption,
} from "../data/interfaces";
import { ListState } from "../data/listSlice";
import _ from "lodash";
import EquipmentService from "./EquipmentService";
import { makeCopy } from "./Helpers";
import UpgradeService from "./UpgradeService";

export interface IFullUnit {
  unitSize: number;
  unitPoints: number;
  unit: ISelectedUnit;
  joined?: ISelectedUnit;
  heroes: ISelectedUnit[];
  hasJoined: boolean
};

export default class UnitService {
  public static getSelected(list: ListState): ISelectedUnit {
    return list.selectedUnitId === null || list.selectedUnitId === undefined
      ? null
      : list.units.find((u) => u.selectionId === list.selectedUnitId);
  }

  public static getAllEquipment(unit: ISelectedUnit) {
    const items = unit.loadout.filter((e) => e.type === "ArmyBookItem");
    const itemContent = items.flatMap((i: IUpgradeGainsItem) => i.content);
    return unit.loadout.concat(itemContent);
  }

  public static getUpgradeRules(unit: ISelectedUnit): IUpgradeGainsRule[] {
    return unit.selectedUpgrades
      .map((x) => x.option)
      .reduce((value, option) => value.concat(option.gains), [])
      .filter(x => x.type === "ArmyBookRule") as IUpgradeGainsRule[];
  }

  public static getAllUpgradedRules(unit: ISelectedUnit): IUpgradeGainsRule[] {
    const rules = this.getUpgradeRules(unit) || [];
    const rulesFromItems =
      unit.loadout?.filter((u) => u.type === "ArmyBookItem")
        .reduce(
          (value, u: IUpgradeGainsItem) =>
            value.concat(u.content.filter((c) => c.type === "ArmyBookRule" || c.type === "ArmyBookDefense")),
          []
        ) || [];

    return rules.concat(rulesFromItems) as IUpgradeGainsRule[];
  }

  public static getAllRules(unit: ISelectedUnit): IUpgradeGainsRule[] {
    return (unit.specialRules || []).concat(this.getAllUpgradedRules(unit)) as IUpgradeGainsRule[];
  }

  public static getSize(unit: ISelectedUnit, joined?: ISelectedUnit[]): number {
    const extraModelCount = unit.selectedUpgrades.map((x) => x.option).filter((u) => u.isModel).length;
    return unit.size + extraModelCount + (joined?.reduce((size, u) => size + this.getSize(u), 0) ?? 0);
  }

  public static createUnitFromDefinition(unit: IUnit): ISelectedUnit {
    return {
      ...unit,
      selectionId: nanoid(5),
      selectedUpgrades: [],
      combined: false,
      joinToUnit: null,
      equipment: unit.equipment.map((eqp) => ({
        ...eqp,
        count: eqp.count || unit.size, // Add count to unit size if not already present
      })),
      loadout: [],
      xp: 0,
      traits: [],
      notes: null
    };
  }

  public static mergeCombinedUnit(unit: ISelectedUnit, attached: ISelectedUnit): ISelectedUnit {
    console.log("Merging ", unit);
    console.log("with", attached);
    if (!attached) return unit;
    return {
      ...unit,
      size: unit.size + attached.size,
      loadout: unit.loadout.concat(attached.loadout),
      selectedUpgrades: unit.selectedUpgrades.concat(attached.selectedUpgrades),
    };
  }

  public static getFullUnitList(input: ISelectedUnit[], combine: boolean) {
    const units = (input ?? []).map((u) => makeCopy(u));

    const result = units.filter((x: ISelectedUnit) => !x.joinToUnit).map((unit: ISelectedUnit) => {
      const attachedUnits: ISelectedUnit[] = input.filter((u) => u.joinToUnit === unit.selectionId);
      const [heroes, joined]: [ISelectedUnit[], ISelectedUnit[]] = _.partition(
        attachedUnits,
        (u) => u.specialRules.some((r) => r.name === "Hero")
      );

      const unitSize = joined.reduce(
        (size, u) => size + UnitService.getSize(u),
        UnitService.getSize(unit)
      );
      const unitPoints = attachedUnits.reduce(
        (cost, u) => cost + UpgradeService.calculateUnitTotal(u),
        UpgradeService.calculateUnitTotal(unit)
      );
      return {
        unitSize,
        unitPoints,
        unit: combine ? UnitService.mergeCombinedUnit(unit, joined[0]) : unit,
        joined: joined[0], // Combined units can only have one joined...
        heroes,
        hasJoined: attachedUnits.length > 0
      };
    });

    return _.sortBy(result, x => x.unit.sortId);
  }

  public static getGroupedDisplayUnits(input: IFullUnit[]) {
    const unitAsKey = (unit: ISelectedUnit) => {
      return {
        id: unit.id,
        customName: unit.customName,
        joinToUnit: unit.joinToUnit,
        upgrades: unit.selectedUpgrades.map((x) => ({
          sectionId: x.upgrade.uid,
          optionId: x.option.id,
        })),
        loadout: unit.loadout.map((x) => ({
          id: x.id,
          count: x.count,
        })),
      };
    };

    return _.groupBy(input, (u) => JSON.stringify(unitAsKey(u.unit)));
  }

  private static readonly countRegex = /^(\d+)x\s/;

  public static getDisabledUpgradeSections(u: IUnit, upgradePackages: IUpgradePackage[]) {
    const packagesForUnit = u.upgrades
      // Map all upgrade packages
      .map((uid) => upgradePackages.find((pkg) => pkg.uid === uid))
      .filter((pkg) => !!pkg);
    const sections = packagesForUnit
      // Flatten down to array of all upgrade sections
      .reduce<IUpgrade[]>((sections, next) => sections.concat(next.sections), []);

    const allGains: IUpgradeGains[] = sections
      .reduce<IUpgradeOption[]>((opts, next) => opts.concat(next.options), [])
      .reduce<IUpgradeGains[]>((gains, next) => gains.concat(next.gains), [])
      .reduce<IUpgradeGains[]>((gains, next) => {
        // Add root item/weapon/etc
        gains.push(next);

        // For items, also add the content
        if (next.type !== "ArmyBookItem") return gains;

        return gains.concat((next as IUpgradeGainsItem).content);
      }, []);

    const disabledSections: string[] = [];

    // For each section, check that the unit has access to the things it wants to replace
    // Only need sections that are replacing (or looking for) something
    for (let section of sections.filter((s) => s.replaceWhat)) {
      for (let what of section.replaceWhat) {
        const target = what.replace(this.countRegex, "");

        // Does equipment contain this thing?
        const equipmentMatch = u.equipment.some((e) =>
          EquipmentService.compareEquipment({ ...e, label: (e.label ?? e.name).replace(this.countRegex, "") }, target)
        );
        // If equipment, then we won't be disabling this section...
        if (equipmentMatch) continue;

        // Do any upgrade sections contain this thing?
        const upgradeGains = allGains.find((g) => EquipmentService.compareEquipment(g, target));
        // If upgrade gains found, don't disable this
        if (upgradeGains) continue;

        // If neither was found, then disable this section
        disabledSections.push(section.uid);
      }
    }

    return disabledSections;
  }
}
