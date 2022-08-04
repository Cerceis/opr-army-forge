import { IconButton, Stack, Typography } from "@mui/material";
import { IArmyData } from "../../data/armySlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ArmyBookGroupHeaderProps {
  army: IArmyData;
  collapsed: boolean;
  setCollapsed: any;
  points?: number;
}

export default function ArmyBookGroupHeader(props: ArmyBookGroupHeaderProps) {
  // px-4 py-2 is-flex is-align-items-center
  return (
    <Stack sx={{ px: 2, py: 1, backgroundColor:"action.hover" }} direction="row" alignItems="center">
      <Typography flex={1} fontWeight={600}>
        {props.army.name} - {props.army.versionString}
      </Typography>
      {props.points && <span>{props.points}pts</span>}
      <IconButton onClick={() => props.setCollapsed((prev: boolean) => !prev)} color="primary">
        {props.collapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </IconButton>
    </Stack>
  );
}
