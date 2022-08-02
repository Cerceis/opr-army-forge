import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../data/store";
import { ISelectedUnit } from "../data/interfaces";
import RemoveIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { selectUnit, removeUnit, addUnits, ListState } from "../data/listSlice";
import UpgradeService from "../services/UpgradeService";
import { Box, Card, ListItemIcon, ListItemText, MenuItem, Stack, Typography } from "@mui/material";
import UnitService from "../services/UnitService";
import LinkIcon from "@mui/icons-material/Link";
import _ from "lodash";
import { DropMenu } from "./components/DropMenu";
import ArmyBookGroupHeader from "./components/ArmyBookGroupHeader";
import UnitListItem from "./components/UnitListItem";

export function MainList({ onSelected, onUnitRemoved }) {
  const list = useSelector((state: RootState) => state.list);
  const loadedArmyBooks = useSelector((state: RootState) => state.army.loadedArmyBooks);

  const rootUnits = _.orderBy(
    list.units.filter(
      (u) => !(u.joinToUnit && list.units.some((t) => t.selectionId === u.joinToUnit))
    ),
    (x) => x.sortId
  );

  const unitGroups = _.groupBy(rootUnits, (x) => x.armyId);
  const unitGroupKeys = Object.keys(unitGroups);

  return (
    <Box>
      {unitGroupKeys.map((key) => {
        const armyBook = loadedArmyBooks.find((book) => book.uid === key);
        const points = list.units
          .filter((u) => u.armyId === key)
          .reduce((total, unit) => total + UpgradeService.calculateUnitTotal(unit), 0);
        return (
          <MainListSection
            key={key}
            army={armyBook}
            showTitle={loadedArmyBooks.length > 1}
            group={unitGroups[key]}
            onSelected={onSelected}
            onUnitRemoved={onUnitRemoved}
            points={points}
          />
        );
      })}
    </Box>
  );
}

function MainListSection({ group, army, showTitle, onSelected, onUnitRemoved, points }) {
  const list = useSelector((state: RootState) => state.list);
  const [collapsed, setCollapsed] = useState(false);

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
          {group.map((s: ISelectedUnit, index: number) => {
            // TODO: REFACTOR!

            const attachedUnits: ISelectedUnit[] = UnitService.getAttachedUnits(list, s);
            const [heroes, otherJoined]: [ISelectedUnit[], ISelectedUnit[]] = _.partition(
              attachedUnits,
              (u) => u.specialRules.some((r) => r.name === "Hero")
            );
            const hasJoined = attachedUnits.length > 0;
            const hasHeroes = hasJoined && heroes.length > 0;

            const unitSize = otherJoined.reduce((size, u) => {
              return size + UnitService.getSize(u);
            }, UnitService.getSize(s));
            const unitPoints = attachedUnits.reduce((cost, u) => {
              return cost + UpgradeService.calculateUnitTotal(u);
            }, UpgradeService.calculateUnitTotal(s));

            const handleClick = (unit) => {
              onSelected(unit);
            };

            return (
              <Box
                key={index}
                sx={{ backgroundColor: hasJoined ? "action.hover" : "", my: hasJoined ? 1 : 0 }}
              >
                {hasJoined && (
                  <Stack alignItems="center" px={2} py={1} direction="row">
                    <LinkIcon />
                    <Typography flex={1} ml={1}>
                      {hasHeroes && `${heroes[0].customName || heroes[0].name} & `}
                      {s.customName || s.name}
                      <Typography
                        component="span"
                        color="text.secondary"
                      >{` [${unitSize}]`}</Typography>
                    </Typography>
                    <span>{unitPoints}pts</span>
                    <DropMenu sx={{ ml: 1 }}>
                      <DuplicateButton
                        units={[s, ...attachedUnits].filter((u) => u)}
                        text="Duplicate"
                      />
                    </DropMenu>
                  </Stack>
                )}
                <Box sx={{ ml: hasJoined ? 0.5 : 0 }}>
                  {heroes.map((h) => (
                    <MainListItem
                      key={h.selectionId}
                      list={list}
                      unit={h}
                      onSelected={handleClick}
                      onUnitRemoved={onUnitRemoved}
                    />
                  ))}
                  <MainListItem
                    list={list}
                    unit={s}
                    onSelected={handleClick}
                    onUnitRemoved={onUnitRemoved}
                  />
                  {otherJoined.map((u) => (
                    <MainListItem
                      key={u.selectionId}
                      list={list}
                      unit={u}
                      onSelected={handleClick}
                      onUnitRemoved={onUnitRemoved}
                    />
                  ))}
                </Box>
              </Box>
            );
          })}
        </>
      )}
    </Card>
  );
}

function MainListItem({ list, unit, onSelected, onUnitRemoved }) {
  const dispatch = useDispatch();

  const handleSelectUnit = (unit: ISelectedUnit) => {
    if (list.selectedUnitId !== unit.selectionId) {
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
      selected={list.selectedUnitId === unit.selectionId}
      onClick={() => {
        handleSelectUnit(unit);
      }}
      rightControl={
        <DropMenu>
          <DuplicateButton units={[unit]} text="Duplicate" />
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
      }
    />
  );
}

export function DuplicateButton({ units, text = "" }) {
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
      {text ? (
        <>
          <ListItemIcon>
            <ContentCopyIcon />
          </ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </>
      ) : (
        <ContentCopyIcon />
      )}
    </MenuItem>
  );
}
