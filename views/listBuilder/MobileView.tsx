import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../data/store";
import { UnitSelection } from "../UnitSelection";
import { MainList } from "../MainList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-spring-bottom-sheet/dist/style.css";
import { Upgrades } from "../upgrades/Upgrades";
import { BottomSheet } from "react-spring-bottom-sheet";
import { AppBar, Paper, Tab, Tabs, Button, Box, Typography, useTheme } from "@mui/material";
import { selectUnit } from "../../data/listSlice";
import UpgradePanelHeader from "../components/UpgradePanelHeader";
import Add from "@mui/icons-material/Add";
import MainMenu from "../components/MainMenu";
import ValidationErrors from "../ValidationErrors";
import UndoRemoveUnit from "../components/UndoRemoveUnit";
import { ISelectedUnit } from "../../data/interfaces";
import { useRouter } from "next/router";
import ArmyImage from "../components/ArmyImage";

export default function MobileView() {
  const list = useSelector((state: RootState) => state.list);
  const army = useSelector((state: RootState) => state.army);

  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme();

  const sheetOpen = (router.query["upgradesOpen"] as string) == "true";
  const armyData = army?.loadedArmyBooks?.[0];

  const [slider, setSlider] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const [validationOpen, setValidationOpen] = useState(false);
  const [showUndoRemove, setShowUndoRemove] = useState(false);

  // Open bottom sheet when unit is selected
  const onUnitSelected = (unit: ISelectedUnit) => {
    router.push({ query: { ...router.query, upgradesOpen: true } });
  };

  // Reset selected unit when sheet is closed
  function onDismissSheet() {
    delete router.query.upgradesOpen;
    router.push({ query: { ...router.query } });
    dispatch(selectUnit(null));
  }

  // Keep Tab bar and carousel in sync
  const handleSlideChange = (event, newValue) => {
    setSlideIndex(newValue);
    slider.slickGoTo(newValue);
  };

  // Slick carousel settings
  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    initialSlide: 1,
    beforeChange: (current, next) => handleSlideChange(null, next),
    afterChange: () => window.scrollTo(0, 0),
  };
  console.log();
  return (
    <>
      <Paper elevation={1} color="primary" square style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <MainMenu />
        <AppBar elevation={0} style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <Tabs
            value={slideIndex}
            onChange={handleSlideChange}
            centered
            variant="fullWidth"
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab
              sx={{ fontWeight: 600 }}
              label={
                army?.loadedArmyBooks.length > 1
                  ? "Army Books"
                  : `${armyData?.name} ${armyData?.versionString}`
              }
            />
            <Tab sx={{ fontWeight: 600 }} label={`My List - ${list.points}pts`} />
          </Tabs>
        </AppBar>
      </Paper>

      <Slider {...sliderSettings} ref={(slider) => setSlider(slider)} style={{ maxHeight: "100%" }}>
        <UnitSelection />
        {list.units.length > 0 ? (
          <MainList onSelected={onUnitSelected} onUnitRemoved={() => setShowUndoRemove(true)} />
        ) : (
          <Box p={2} textAlign="center">
            <Typography variant="h5" sx={{ mb: 2 }}>
              Your list is empty
            </Typography>
            <Button variant="outlined" onClick={() => handleSlideChange(null, 0)} sx={{ mb: 4 }}>
              <Add /> Add Units
            </Button>
            <ArmyImage name={armyData?.factionName ?? armyData?.name} armyData={armyData} />
          </Box>
        )}
      </Slider>

      <style>
        div[data-rsbs-overlay] &#123; background-color: {theme.palette.background.default}{" "}
        !important; &#125;
      </style>
      <BottomSheet
        open={sheetOpen}
        onDismiss={onDismissSheet}
        initialFocusRef={false}
        expandOnContentDrag={true}
        onScrollCapture={(e) => e.preventDefault()}
        defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? Math.min(...snapPoints)}
        snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight * 0.9]}
        header={<UpgradePanelHeader />}
      >
        <Upgrades />
      </BottomSheet>

      <ValidationErrors open={validationOpen} setOpen={setValidationOpen} />

      <UndoRemoveUnit open={showUndoRemove} setOpen={setShowUndoRemove} />
    </>
  );
}
