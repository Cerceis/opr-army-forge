import { Card, Grid, Typography } from "@mui/material";
import ArmyImage from "../components/ArmyImage";
import _ from "lodash";
import { IArmyData } from "../../data/armySlice";

interface ArmyBookTileProps {
  army: IArmyData;
  enabled: boolean;
  onSelect: (army: IArmyData) => void;
}

export default function ArmyBookTile({ army, enabled, onSelect }: ArmyBookTileProps) {
  return (
    <Grid item xs={6} sm={4} lg={3} style={{ filter: enabled ? null : "saturate(0.25)" }}>
      <Card
        elevation={2}
        sx={{ p: 1 }}
        className={enabled ? "interactable" : null}
        onClick={() => (enabled ? onSelect(army) : null)}
      >
        <ArmyImage name={army.name} armyData={army} />
        <Typography mt={2} fontWeight={600} textAlign="center" variant="subtitle2">
          {army.name}
        </Typography>
      </Card>
    </Grid>
  );
}
