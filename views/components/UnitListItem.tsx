import { Divider, Paper, Stack, Typography } from "@mui/material";
import { ISelectedUnit, IUnit } from "../../data/interfaces";
import EquipmentService from "../../services/EquipmentService";
import UnitService from "../../services/UnitService";
import RuleList from "./RuleList";
import _ from "lodash";
import UpgradeService from "../../services/UpgradeService";
import { Box } from "@mui/system";

interface UnitListItemProps {
  unit: ISelectedUnit;
  rightControl: JSX.Element;
  selected: boolean;
  onClick: () => void;
  countInList?: number;
}

export default function UnitListItem(props: UnitListItemProps) {
  const unit = props.unit;
  const loadout = unit.loadout || unit.equipment;

  const weaponGroups = _.groupBy(loadout, (x) => x.name + x.attacks);
  const unitSize = UnitService.getSize(unit);

  return (
    <>
      <Paper
        sx={{
          p: 2,
          backgroundColor: props.selected
            ? "action.selected"
            : props.countInList > 0
            ? "action.hover"
            : null,
          borderLeft: props.countInList > 0 ? "2px solid red" : null,
          borderLeftColor: "primary.main",
          cursor: "pointer",
        }}
        elevation={0}
        square
        onClick={props.onClick}
      >
        <Stack alignItems="center" mb={1} direction="row">
          <Box flex={1}>
            <Typography>
              {props.countInList > 0 && (
                <Typography component="span" color="primary.main">
                  {props.countInList}x{" "}
                </Typography>
              )}
              <span>{unit.customName || unit.name} </span>
              <Typography component="span" color="text.secondary">
                [{unitSize}]
              </Typography>
            </Typography>
            <Typography color="text.secondary">
              <Typography variant="body2" component="span">
                Qua {unit.quality}+
              </Typography>
              <Typography variant="body2" component="span" pl={1}>
                Def {unit.defense}+
              </Typography>
            </Typography>
          </Box>
          <Typography>{UpgradeService.calculateUnitTotal(unit)}pts</Typography>
          {props.rightControl}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {Object.values(weaponGroups).map((group: any[], i) => {
            const count = group.reduce((c, next) => c + next.count, 0);
            return (
              <span key={i}>
                {i > 0 ? ", " : ""}
                {count > 1 ? `${count}x ` : ""}
                {EquipmentService.formatString(group[0] as any)}
              </span>
            );
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <RuleList
            specialRules={unit.specialRules.concat(UnitService.getAllUpgradedRules(unit as any))}
          />
        </Typography>
      </Paper>
      <Divider />
    </>
  );
}
