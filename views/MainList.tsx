import React, { Fragment, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../data/store";
import { ISelectedUnit } from "../data/interfaces";
import RemoveIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { selectUnit, removeUnit, addUnits } from "../data/listSlice";
import UpgradeService from "../services/UpgradeService";
import { Box, Card, ListItemIcon, ListItemText, MenuItem, Stack, Typography } from "@mui/material";
import UnitService from "../services/UnitService";
import LinkIcon from "@mui/icons-material/Link";
import _ from "lodash";
import { DropMenu } from "./components/DropMenu";
import ArmyBookGroupHeader from "./components/ArmyBookGroupHeader";
import UnitListItem from "./components/UnitListItem";
import { IArmyData } from "../data/armySlice";

export interface MainListProps {
  onSelected: (unit: ISelectedUnit) => void;
  onUnitRemoved: (unit: ISelectedUnit) => void;
  units: ISelectedUnit[];
}

export function MainList({ onSelected, onUnitRemoved, units }: MainListProps) {
  const loadedArmyBooks = useSelector((state: RootState) => state.army.loadedArmyBooks);

  const unitGroups = _.groupBy(units, (x) => x.armyId);
  const unitGroupKeys = Object.keys(unitGroups);

  return (
    <Box>
      {unitGroupKeys.map((key) => {
        const armyBook = loadedArmyBooks.find((book) => book.uid === key);
        const points = units
          .filter((u) => u.armyId === key)
          .reduce((total, unit) => total + UpgradeService.calculateUnitTotal(unit), 0);
        return (
          <MainListSection
            key={key}
            army={armyBook}
            showTitle={loadedArmyBooks.length > 1}
            units={unitGroups[key]}
            onSelected={onSelected}
            onUnitRemoved={onUnitRemoved}
            points={points}
          />
        );
      })}
    </Box>
  );
}

interface MainListSectionProps {
  units: ISelectedUnit[];
  army: IArmyData;
  showTitle: boolean;
  onSelected: Function;
  onUnitRemoved: Function;
  points: number;
}

function MainListSection({
  units,
  army,
  showTitle,
  onSelected,
  onUnitRemoved,
  points,
}: MainListSectionProps) {
  const list = useSelector((state: RootState) => state.list);
  const [collapsed, setCollapsed] = useState(false);

  const fullUnits = useMemo(() => UnitService.getFullUnitList(units, false), [units]);
  console.log("fullUnits", fullUnits);

  return (
    <Card elevation={2} sx={{ mb: 2 }} square>
      {showTitle && (
        <ArmyBookGroupHeader
          army={army}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          points={points}
        />
      )}
      {!collapsed && (
        <>
          {fullUnits.map((fullUnit, index: number) => {
            const { hasJoined, heroes, unit, unitSize, unitPoints, joined } = fullUnit;

            const listItem = (unit: ISelectedUnit, hideOptions?: boolean) => (
              <MainListItem
                selected={list.selectedUnitId === unit.selectionId}
                unit={unit}
                onSelected={() => onSelected(unit)}
                onUnitRemoved={onUnitRemoved}
                hideOptions={hideOptions}
              />
            );

            return (
              <Box
                key={index}
                sx={{ backgroundColor: hasJoined ? "action.hover" : "", my: hasJoined ? 1 : 0 }}
              >
                {hasJoined && (
                  <Stack alignItems="center" px={2} py={1} direction="row">
                    <LinkIcon />
                    <Typography flex={1} ml={1}>
                      {heroes.length > 0 && `${heroes[0].customName || heroes[0].name} & `}
                      {unit.customName || unit.name}
                      <Typography
                        component="span"
                        color="text.secondary"
                      >{` [${unitSize}]`}</Typography>
                    </Typography>
                    <span>{unitPoints}pts</span>
                    <DropMenu sx={{ ml: 1 }}>
                      <DuplicateButton units={[unit, ...heroes, joined].filter((u) => u)} />
                    </DropMenu>
                  </Stack>
                )}
                <Box sx={{ ml: hasJoined ? 0.5 : 0 }}>
                  {heroes.map((h) => (
                    <Fragment key={h.selectionId}>{listItem(h)}</Fragment>
                  ))}
                  {listItem(unit)}
                  {joined && listItem(joined, true)}
                </Box>
              </Box>
            );
          })}
        </>
      )}
    </Card>
  );
}

interface MainListItemProps {
  selected: boolean;
  unit: ISelectedUnit;
  onSelected: Function;
  onUnitRemoved: Function;
  hideOptions: boolean;
}

function MainListItem({
  selected,
  unit,
  onSelected,
  onUnitRemoved,
  hideOptions,
}: MainListItemProps) {
  const dispatch = useDispatch();

  const handleSelectUnit = (unit: ISelectedUnit) => {
    if (!selected) {
      dispatch(selectUnit(unit.selectionId));
    }
    onSelected(unit);
  };

  const handleRemove = (unit: ISelectedUnit) => {
    onUnitRemoved(unit);
    dispatch(removeUnit(unit.selectionId));
  };

  return (
    <UnitListItem
      unit={unit}
      selected={selected}
      onClick={() => {
        handleSelectUnit(unit);
      }}
      rightControl={
        hideOptions ? null : (
          <DropMenu>
            <DuplicateButton units={[unit]} />
            <MenuItem
              color="primary"
              onClick={(e) => {
                handleRemove(unit);
              }}
            >
              <ListItemIcon>
                <RemoveIcon />
              </ListItemIcon>
              <ListItemText>Remove</ListItemText>
            </MenuItem>
          </DropMenu>
        )
      }
    />
  );
}

export function DuplicateButton({ units }) {
  const dispatch = useDispatch();

  const duplicateUnits = (units: ISelectedUnit[]) => {
    dispatch(addUnits(units));
  };

  return (
    <MenuItem
      color="primary"
      onClick={(e) => {
        duplicateUnits(units);
      }}
    >
      <ListItemIcon>
        <ContentCopyIcon />
      </ListItemIcon>
      <ListItemText>Duplicate</ListItemText>
    </MenuItem>
  );
}
