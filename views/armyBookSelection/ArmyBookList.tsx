import CircularProgress from "@mui/material/CircularProgress";
import { IArmyData } from "../../data/armySlice";
import _ from "lodash";
import ArmyBookTile from "./ArmyBookTile";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { Stack, Grid, Typography } from "@mui/material";

interface ArmyBookListProps {
  armyBooks: IArmyBookListItem[];//IArmyData[];
  onSelect: (army: any) => void;
}

export interface IArmyBookListItem {
  name: string;
}

export function ArmyBookList({ armyBooks, onSelect }: ArmyBookListProps) {
  const sortedArmies = _.sortBy(armyBooks, (a) => a.name);
  const armyState = useSelector((state: RootState) => state.army);
  const loadedArmyBooks = armyState.loadedArmyBooks;
  const loadedFactions = armyState.selectedFactions;
  const isLoaded = (name) => {
    return (
      loadedArmyBooks.some((book) => book.name === name) ||
      loadedFactions.some((faction) => faction === name)
    );
  };

  return (
    <>
      {!(armyBooks?.length > 0) && (
        <Stack alignItems="center" mx="auto">
          <CircularProgress />
          <Typography>Loading armies...</Typography>
        </Stack>
      )}
      <Grid container spacing={2}>
        {sortedArmies.map((army, index) => (
          <ArmyBookTile
            key={index}
            army={army}
            onSelect={onSelect}
            enabled={!isLoaded(army.name)}
          />
        ))}
      </Grid>
    </>
  );
}
