import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  IUpgradeGains,
  IUpgradeGainsItem,
  IUpgradeGainsRule,
  IUpgradeGainsWeapon,
} from "../data/interfaces";
import EquipmentService from "../services/EquipmentService";
import pluralise from "pluralize";
import RuleList from "./components/RuleList";
import _ from "lodash";
import DataParsingService from "../services/DataParsingService";

interface UnitEquipmentTableProps {
  loadout: IUpgradeGains[];
  square: boolean;
  hideEquipment?: boolean;
}

export default function UnitEquipmentTable({
  loadout,
  square,
  hideEquipment = false,
}: UnitEquipmentTableProps) {
  const isWeapon = (e) => e.attacks;

  const weaponsFromItems = _.flatMap(
    loadout.filter((e) => e.type === "ArmyBookItem"),
    (e: IUpgradeGainsItem) =>
      e.content
        .filter((item) => item.type === "ArmyBookWeapon")
        .map((weapon: IUpgradeGainsWeapon) => ({
          ...weapon,
          count: (weapon.count || 1) * (e.count || 1),
        }))
  );
  const weapons = loadout
    .filter((e) => isWeapon(e))
    .concat(weaponsFromItems.map((item) => ({ ...item, count: item.count ?? 1 })));

  const equipment = loadout.filter((e) => !isWeapon(e));
  const combinedEquipment = equipment.map((e) => {
    if (e.type === "ArmyBookItem")
      return {
        label: e.name,
        specialRules: (e as IUpgradeGainsItem).content.filter(
          (c) => c.type === "ArmyBookRule" || c.type === "ArmyBookDefense"
        ) as IUpgradeGainsRule[],
      };

    return {
      label: e.label || e.name,
      specialRules: e.specialRules.map(DataParsingService.parseRule),
    };
  });

  const hasWeapons = weapons.length > 0;
  const hasEquipment = equipment.length > 0; // || itemUpgrades.length > 0;

  const weaponGroups = _.groupBy(weapons, (w) => pluralise.singular(w.name ?? w.label) + w.attacks);
  const itemGroups = _.groupBy(combinedEquipment, (w) =>
    pluralise.singular((w as any).name ?? w.label)
  );
  const weaponGroupKeys = Object.keys(weaponGroups);

  const cellStyle = {
    px: 1,
  };
  const headerStyle = { ...cellStyle, fontWeight: 600, py: 0.25 };

  return (
    <>
      {hasWeapons && (
        <TableContainer component={Paper} square={square} elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: "action.hover", fontWeight: 600 }}>
                <TableCell sx={headerStyle}>Weapon</TableCell>
                <TableCell sx={headerStyle}>RNG</TableCell>
                <TableCell sx={headerStyle}>ATK</TableCell>
                <TableCell sx={headerStyle}>AP</TableCell>
                <TableCell sx={headerStyle}>SPE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {weaponGroupKeys.map((key, i) => {
                const group = weaponGroups[key];
                const upgrade = group[0] as IUpgradeGainsWeapon;
                const count = group.reduce((c, next) => c + next.count, 0);
                const e = { ...upgrade, count };

                return (
                  <WeaponRow
                    key={key}
                    weapon={e}
                    isProfile={false}
                    isLastRow={i === weaponGroupKeys.length - 1}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {hasEquipment && !hideEquipment && (
        <TableContainer component={Paper} sx={{ mt: 2 }} square={square} elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: "action.hover", fontWeight: 600 }}>
                <TableCell sx={headerStyle}>Equipment</TableCell>
                <TableCell sx={headerStyle}>SPE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(itemGroups).map((group: any[], index) => {
                const e = group[0];
                const count = group.reduce((c, next) => c + (next.count || 1), 0);

                return (
                  <TableRow key={index}>
                    <TableCell sx={cellStyle}>
                      {count > 1 ? `${count}x ` : ""}
                      {e.label}
                    </TableCell>
                    <TableCell sx={cellStyle}>
                      <RuleList specialRules={e.specialRules} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export function WeaponRow({
  weapon,
  isProfile,
  isLastRow,
}: {
  weapon: IUpgradeGainsWeapon;
  isProfile: boolean;
  isLastRow: boolean;
}) {
  const count = weapon.count;
  const name = count > 1 ? pluralise.plural(weapon.name) : pluralise.singular(weapon.name);
  const weaponCount = count > 1 ? `${count}x ` : null;
  const rules = weapon.specialRules.filter((r) => r.name !== "AP");

  return (
    <TableRow>
      <TableCell sx={{ px: 1, fontWeight: 600 }}>
        {weaponCount}
        {isProfile ? `- ${name}` : name}
      </TableCell>
      <TableCell>{weapon.range ? weapon.range + '"' : "-"}</TableCell>
      <TableCell>{weapon.attacks ? "A" + weapon.attacks : "-"}</TableCell>
      <TableCell>{EquipmentService.getAP(weapon) || "-"}</TableCell>
      <TableCell>
        {rules && rules.length > 0 ? <RuleList specialRules={rules} /> : <span>-</span>}
      </TableCell>
    </TableRow>
  );
}
