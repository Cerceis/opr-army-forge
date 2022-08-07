import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, store } from "../data/store";
import { useRouter } from "next/router";
import { Container, Stack, TextField } from "@mui/material";

import { resetList, selectUnit } from "../data/listSlice";
import { getArmyBooks, setGameSystem } from "../data/armySlice";
import ArmyImage from "../views/components/ArmyImage";
import { MenuBar } from "../views/components/MenuBar";
import { CreateView } from "../views/listConfiguration/CreateView";
import EditView from "../views/listConfiguration/EditView";
import MultipleArmySelections from "../views/listConfiguration/MultipleArmySelections";
import { Box } from "@mui/system";

export default function ListConfiguration() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();

  const isEdit = !!router.query["edit"];

  const armyState = useSelector((state: RootState) => state.army);
  const listState = useSelector((state: RootState) => state.list);

  const [armyName, setArmyName] = useState(isEdit ? listState.name : "");
  const [pointsLimit, setPointsLimit] = useState(isEdit ? listState.pointsLimit : null);

  const armyData = armyState.loadedArmyBooks?.[0];

  useEffect(() => {
    // Ensure gameSystem is set
    if (!armyState.gameSystem) {
      dispatch(setGameSystem(router.query["gameSystem"] as string));
      return;
    }
  }, [armyState.gameSystem]);

  useEffect(() => {
    // Load books if not loaded
    if (armyState.gameSystem && armyState.armyBooks?.length <= 0) {
      dispatch(getArmyBooks(armyState.gameSystem));
    }
  }, [armyState.gameSystem, armyState.armyBooks]);

  // Reset list if not edit mode
  useEffect(() => {
    dispatch(selectUnit(null));
    if (!isEdit) dispatch(resetList());
  }, []);

  useEffect(() => {
    // TODO: Be nice to the user and work out if the name was set manually before overriding it? nah
    setArmyName(listState?.name || armyData?.name || "");
  }, [armyData]);

  return (
    <>
      <MenuBar
        title={isEdit ? "List Details" : armyData?.name || "New Army"}
        onBackClick={() => router.back()}
        transparent
      />
      <Container maxWidth={false} sx={{ maxWidth: "480px", mx: "auto", mt: 2 }}>
        <Box sx={{ mb: 4 }}>
          {armyData && (
            <ArmyImage name={armyData?.factionName ?? armyData?.name} armyData={armyState} />
          )}
        </Box>
        <Stack spacing={2} sx={{ mb: 2 }}>
          <TextField
            variant="filled"
            label="List Name"
            value={armyName}
            onChange={(e) => setArmyName(e.target.value)}
          />
          <TextField
            variant="filled"
            label="Points Limit"
            type="number"
            value={pointsLimit ?? ""}
            onChange={(e) => setPointsLimit(e.target.value ? parseInt(e.target.value) : null)}
          />
        </Stack>
        <MultipleArmySelections />
        {isEdit ? (
          <EditView armyName={armyName} pointsLimit={pointsLimit} />
        ) : (
          <CreateView armyName={armyName} pointsLimit={pointsLimit} />
        )}
      </Container>
    </>
  );
}
