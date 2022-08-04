import { IconButton, Typography } from "@mui/material";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch } from "react-redux";
import { ISelectedUnit, IUpgrade, IUpgradeOption } from "../../../data/interfaces";
import { applyUpgrade, removeUpgrade } from "../../../data/listSlice";
import UpgradeService from "../../../services/UpgradeService";

export default function UpgradeUpDown({
  selectedUnit,
  upgrade,
  option,
}: {
  selectedUnit: ISelectedUnit;
  upgrade: IUpgrade;
  option: IUpgradeOption;
}) {
  const dispatch = useDispatch();

  const incrementUpgrade = (unit: ISelectedUnit, upgrade: IUpgrade, option: IUpgradeOption) => {
    dispatch(applyUpgrade({ unitId: unit.selectionId, upgrade, option }));
  };
  const decrementUpgrade = (unit: ISelectedUnit, upgrade: IUpgrade, option: IUpgradeOption) => {
    dispatch(removeUpgrade({ unitId: unit.selectionId, upgrade, option }));
  };

  const countApplied = UpgradeService.countApplied(selectedUnit, upgrade, option);
  const isValid = UpgradeService.isValid(selectedUnit, upgrade, option);

  // #endregion

  return (
    <>
      <IconButton
        disabled={countApplied === 0}
        color={countApplied > 0 ? "primary" : "default"}
        onClick={() => decrementUpgrade(selectedUnit, upgrade, option)}
      >
        <DownIcon />
      </IconButton>
      <Typography sx={{ opacity: isValid ? 1 : 0.5 }}>{countApplied}</Typography>
      <IconButton
        disabled={!isValid}
        color={"primary"}
        onClick={() => incrementUpgrade(selectedUnit, upgrade, option)}
      >
        <UpIcon />
      </IconButton>
    </>
  );
}
