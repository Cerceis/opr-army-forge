import {
  ISelectedUnit,
  IUpgrade,
  IUpgradeGains,
  IUpgradeOption,
  IUpgradeGainsWeapon,
  IUpgradeGainsItem,
  IUpgradeGainsRule,
} from "../../data/interfaces";
import UpgradeService from "../../services/UpgradeService";
import UpgradeRadio from "./controls/UpgradeRadio";
import UpgradeCheckbox from "./controls/UpgradeCheckbox";
import UpgradeUpDown from "./controls/UpgradeUpDown";
import { groupBy } from "../../services/Helpers";
import pluralise from "pluralize";
import RuleList from "../components/RuleList";
import { Fragment } from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface UpgradeItemProps {
  selectedUnit: ISelectedUnit;
  upgrade: IUpgrade;
  option: IUpgradeOption;
  previewMode: boolean;
  controlType: string;
  label?: string;
}

export default function UpgradeItem({
  selectedUnit,
  upgrade,
  option,
  previewMode,
  label,
  controlType,
}: UpgradeItemProps) {
  // Somehow display the count?
  const gainsGroups = option ? groupBy(option.gains, "name") : null;
  const isValid = option ? UpgradeService.isValid(selectedUnit, upgrade, option) : true;

  const control = (() => {
    switch (controlType) {
      case "check":
        return <UpgradeCheckbox selectedUnit={selectedUnit} upgrade={upgrade} option={option} />;
      case "radio":
        return (
          <UpgradeRadio
            selectedUnit={selectedUnit}
            upgrade={upgrade}
            option={option}
            isValid={isValid}
          />
        );
      case "updown":
        return <UpgradeUpDown selectedUnit={selectedUnit} upgrade={upgrade} option={option} />;
    }
  })();

  return (
    <Stack direction="row" alignItems="center" mb={0.5}>
      <Box flex={1} pr={1} sx={{ opacity: isValid ? null : 0.5 }}>
        {gainsGroups ? (
          Object.keys(gainsGroups).map((key, i) => {
            const group: IUpgradeGains[] = gainsGroups[key];
            const e = group[0];
            const count = group.reduce((c, next) => c + (next.count || 1), 0);

            return <UpgradeItemDisplay key={key} eqp={e} count={count} isValid={isValid} />;
          })
        ) : (
          <Typography>{label}</Typography>
        )}
      </Box>
      <Typography sx={{ opacity: isValid ? null : 0.5 }}>
        {option?.cost ? `${option.cost}pts` : "Free"}&nbsp;
      </Typography>
      {!previewMode && control}
    </Stack>
  );
}

function UpgradeItemDisplay({ eqp, count, isValid }) {
  const name = count > 1 ? pluralise.plural(eqp.name || eqp.label) : eqp.name || eqp.label;

  switch (eqp.type) {
    case "ArmyBookDefense":
    case "ArmyBookRule":
      return <UpgradeItemRule rule={eqp as IUpgradeGainsRule} />;

    case "ArmyBookWeapon":
      return <UpgradeItemWeapon weapon={eqp as IUpgradeGainsWeapon} name={name} count={count} />;

    case "ArmyBookItem":
      return (
        <UpgradeItemItem
          item={eqp as IUpgradeGainsItem}
          name={name}
          count={count}
          isValid={isValid}
        />
      );
    default: {
      console.log("Cannot display upgrade: ", eqp);
    }
  }
}

interface UpgradeItemDisplayPropsBase {
  name?: string;
  count?: number;
  isValid?: boolean;
}

interface UpgradeItemRuleProps extends UpgradeItemDisplayPropsBase {
  rule: IUpgradeGainsRule;
}

function UpgradeItemRule({ rule, isValid }: UpgradeItemRuleProps) {
  return <RuleList specialRules={[rule]} />;
}

interface UpgradeItemWeaponProps extends UpgradeItemDisplayPropsBase {
  weapon: IUpgradeGainsWeapon;
}

function UpgradeItemWeapon({ count, name, weapon }: UpgradeItemWeaponProps) {
  const range = weapon && weapon.range ? `${weapon.range}"` : null;
  const attacks = weapon && weapon.attacks ? `A${weapon.attacks}` : null;
  const weaponRules = weapon.specialRules;

  return (
    <>
      {count > 1 && <span>{count}x </span>}
      <Typography component="span">{name} </Typography>
      <Typography component="span" color="text.secondary">
        ({[range, attacks].filter((r) => r).join(", ") + (weaponRules?.length > 0 ? ", " : "")}
        <RuleList specialRules={weaponRules} />)
      </Typography>
    </>
  );
}

interface UpgradeItemItemProps extends UpgradeItemDisplayPropsBase {
  item: IUpgradeGainsItem;
}

function UpgradeItemItem({ item, count, name, isValid }: UpgradeItemItemProps) {
  return (
    <>
      {count > 1 && <span>{count}x </span>}
      <Typography component="span">{name} </Typography>
      <Typography component="span" color="text.secondary">
        (
        {item.content.map((c, i) => (
          <Fragment key={i}>
            <span>{i === 0 ? "" : ", "}</span>
            <UpgradeItemDisplay eqp={c} count={count} isValid={isValid} />
          </Fragment>
        ))}
        )
      </Typography>
    </>
  );
}
