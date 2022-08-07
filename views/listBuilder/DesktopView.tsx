import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { UnitSelection } from "../UnitSelection";
import { MainList } from "../MainList";
import { Upgrades } from "../upgrades/Upgrades";
import MainMenu from "../components/MainMenu";
import { Card, Grid, Paper, Typography } from "@mui/material";
import UpgradePanelHeader from "../components/UpgradePanelHeader";
import ValidationErrors from "../ValidationErrors";
import UndoRemoveUnit from "../components/UndoRemoveUnit";

export default function DesktopView() {
  const list = useSelector((state: RootState) => state.list);
  const loadedArmyBooks = useSelector((state: RootState) => state.army.loadedArmyBooks);
  const [validationOpen, setValidationOpen] = useState(false);
  const [showUndoRemove, setShowUndoRemove] = useState(false);

  const armyData = loadedArmyBooks?.[0];
  const columnStyle: any = { overflowY: "scroll", maxHeight: "100%" };

  const setScrolled = (e) => {
    let elem = e.target;
    if (elem.scrollTop) {
      elem.classList.add("scrolled");
    } else {
      elem.classList.remove("scrolled");
    }
  };

  return (
    <>
      <Paper elevation={1} color="primary" square>
        <MainMenu />
      </Paper>
      <Grid container sx={{ height: "calc(100vh - 64px);" }}>
        <Grid item xs sx={columnStyle} onScroll={setScrolled}>
          <Card square elevation={1} sx={{ p: 2, position: "sticky", top: 0, zIndex: 1 }}>
            <Typography variant="h5">
              {loadedArmyBooks.length > 1
                ? "Army Books"
                : `${armyData.name} - ${armyData.versionString}`}
            </Typography>
          </Card>
          <UnitSelection />
        </Grid>
        <Grid item xs sx={columnStyle} onScroll={setScrolled}>
          <Card square elevation={1} sx={{ p: 2, position: "sticky", top: 0, zIndex: 1 }}>
            <Typography variant="h5">
              {`My List - ${list.points}` +
                (list.pointsLimit ? `/${list.pointsLimit}` : "") +
                "pts"}
            </Typography>
          </Card>
          <MainList onSelected={() => {}} onUnitRemoved={() => setShowUndoRemove(true)} units={list.units} />
        </Grid>
        <Grid item xs sx={columnStyle} onScroll={setScrolled}>
          <Card
            square
            elevation={1}
            sx={{ px: 2, pt: 2, pb: 1, position: "sticky", top: 0, zIndex: 1 }}
          >
            <UpgradePanelHeader />
          </Card>
          <Upgrades />
        </Grid>
      </Grid>
      <ValidationErrors open={validationOpen} setOpen={setValidationOpen} />
      <UndoRemoveUnit open={showUndoRemove} setOpen={setShowUndoRemove} />
    </>
  );
}
