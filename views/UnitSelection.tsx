import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../data/store";
import { Fragment, useState } from "react";
import { Box, Card, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ISelectedUnit, IUnit } from "../data/interfaces";
import ArmyBookGroupHeader from "./components/ArmyBookGroupHeader";
import UnitListItem from "./components/UnitListItem";
import { addUnit, previewUnit } from "../data/listSlice";
import { useRouter } from "next/router";

export function UnitSelection() {
  const loadedArmyBooks = useSelector((state: RootState) => state.army.loadedArmyBooks);

  return (
    <>
      {loadedArmyBooks.map((book) => (
        <UnitSelectionForArmy key={book.uid} army={book} showTitle={loadedArmyBooks.length > 1} />
      ))}
    </>
  );
}

function UnitSelectionForArmy({ army, showTitle }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const list = useSelector((state: RootState) => state.list);
  const [collapsed, setCollapsed] = useState(false);

  const handleAddClick = (unit: IUnit) => {
    dispatch(addUnit(unit));
  };
  const handleSelectClick = (unit: IUnit) => {
    dispatch(previewUnit(unit as any));
    const scroll = window.scrollY;
    router.events.on("routeChangeComplete", () => {
      window.scrollTo(0, scroll);
    });
    router.push({ query: { ...router.query, upgradesOpen: true } });
  };

  const unitGroups = getUnitCategories(army.units);

  return (
    <Card elevation={2} sx={{ mb: 1 }} square>
      {showTitle && (
        <ArmyBookGroupHeader army={army} collapsed={collapsed} setCollapsed={setCollapsed} />
      )}

      {!collapsed &&
        Object.keys(unitGroups).map((key, i) => (
          <Fragment key={key}>
            {key !== "undefined" && unitGroups[key].length > 0 && (
              <Box
                sx={{
                  px: 2,
                  pt: 2,
                  pb: 0.5,
                  backgroundColor: "action.hover",
                }}
              >
                <Typography letterSpacing=".1em" fontSize=".75em" textTransform="uppercase">
                  {key}
                </Typography>
              </Box>
            )}
            <Divider />
            {unitGroups[key].map((u: ISelectedUnit) => {
              const countInList = list?.units.filter(
                (listUnit) =>
                  listUnit.name === u.name &&
                  listUnit.armyId === army.uid &&
                  (!listUnit.joinToUnit ||
                    listUnit.specialRules.some((x) => x.name.toLowerCase() === "hero"))
              ).length;

              return (
                <UnitListItem
                  key={u.id}
                  unit={u}
                  countInList={countInList}
                  selected={list.unitPreview?.id === u.id}
                  onClick={() => {
                    handleSelectClick(u);
                  }}
                  rightControl={
                    <IconButton
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddClick(u);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  }
                />
              );
            })}
          </Fragment>
        ))}
    </Card>
  );
}

function getUnitCategories(units: IUnit[]) {
  // Group army units by category
  const isTough = (u: IUnit, threshold) =>
    u.specialRules.some((r) => {
      if (r.name !== "Tough") return false;
      const toughness = parseInt(r.rating);
      return toughness >= threshold;
    });
  const hasRule = (u: IUnit, rule: string) => u.specialRules.some((r) => r.name === rule);

  const unitGroups = {
    Heroes: [],
    "Core Units": [],
    "Vehicles / Monsters": [],
    Artillery: [],
    Titans: [],
    Aircraft: [],
  };

  for (let unit of units) {
    if (hasRule(unit, "Hero")) unitGroups["Heroes"].push(unit);
    else if (hasRule(unit, "Aircraft")) unitGroups["Aircraft"].push(unit);
    else if (hasRule(unit, "Artillery")) unitGroups["Artillery"].push(unit);
    else if (isTough(unit, 18) && unit.defense == "2" && unit.size === 1 && hasRule(unit, "Fear"))
      unitGroups["Titans"].push(unit);
    else if (isTough(unit, 6) && unit.defense == "2" && unit.size === 1)
      unitGroups["Vehicles / Monsters"].push(unit);
    else unitGroups["Core Units"].push(unit);
  }

  return unitGroups;
}
