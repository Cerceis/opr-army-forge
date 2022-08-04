import {
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import { RootState } from "../../data/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getArmyBookData, unloadArmyBook, unloadFaction } from "../../data/armySlice";
import _ from "lodash";
import { removeUnitsForBook } from "../../data/listSlice";

export default function MultipleArmySelections() {
  const router = useRouter();
  const armyState = useSelector((state: RootState) => state.army);
  const factions = armyState.selectedFactions;
  const loadedArmyBooks = armyState.loadedArmyBooks;

  const isEdit = !!router.query["edit"];

  const allowRemove =
    _.uniq(
      armyState.selectedFactions.concat(
        loadedArmyBooks.filter((book) => !book.factionName).map((book) => book.name)
      )
    ).length > 1;

  function addAnotherBook() {
    router.replace({
      pathname: "/armyBookSelection",
      query: { ...router.query, append: true },
    });
  }

  return (
    <>
      <Typography my={2} fontWeight={600}>
        Selected Army Books
      </Typography>
      <Paper sx={{ backgroundColor: "action.hover" }} elevation={0}>
        <List>
          {loadedArmyBooks
            .filter((book) => !book.factionName)
            .map((army) => (
              <ArmyBookSelection
                key={army.uid}
                army={army}
                allowRemove={allowRemove}
                editMode={isEdit}
              />
            ))}
          {factions.map((faction) => (
            <FactionArmyBookSelection
              key={faction}
              faction={faction}
              allowRemove={allowRemove}
              editMode={isEdit}
            />
          ))}

          <ListItem disablePadding>
            <ListItemButton onClick={addAnotherBook}>
              <ListItemText
                primary={
                  <Typography color="primary" fontWeight={600}>
                    ADD ANOTHER ARMY
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </>
  );
}

function ArmyBookSelection({ army, allowRemove, editMode }) {
  const dispatch = useDispatch();

  function remove(armyId) {
    const prompt =
      !editMode ||
      confirm("Removing this army book will remove all associated units. Remove anyway?");
    if (prompt) {
      dispatch(unloadArmyBook(armyId));
      dispatch(removeUnitsForBook(armyId));
    }
  }

  return (
    <Fragment>
      <ListItem
        secondaryAction={
          allowRemove && (
            <IconButton
              edge="end"
              aria-label="comments"
              color="primary"
              onClick={() => remove(army.uid)}
            >
              <CloseIcon />
            </IconButton>
          )
        }
      >
        <ListItemText primary={army.name} />
      </ListItem>
      <Divider />
    </Fragment>
  );
}

function FactionArmyBookSelection({ faction, allowRemove, editMode }) {
  const dispatch = useDispatch();

  const armyState = useSelector((state: RootState) => state.army);
  const armyBooks = armyState.armyBooks;
  const loadedArmyBooks = armyState.loadedArmyBooks.filter((book) => book.factionName === faction);
  const factionBooks = armyBooks.filter((book) => book.factionName === faction);
  const factionRelation = factionBooks.filter((book) => book.factionRelation)[0]?.factionRelation;

  function removeFaction(faction) {
    const prompt =
      !editMode ||
      confirm("Removing this faction will remove all associated units. Remove anyway?");
    if (prompt) {
      const booksToRemove = loadedArmyBooks.map((book) => book.uid);
      dispatch(unloadFaction(faction));
      for (let bookId of booksToRemove) {
        dispatch(removeUnitsForBook(bookId));
      }
    }
  }

  function remove(armyId) {
    const prompt =
      !editMode ||
      confirm("Removing this army book will remove all associated units. Remove anyway?");
    if (prompt) {
      dispatch(unloadArmyBook(armyId));
      dispatch(removeUnitsForBook(armyId));
    }
  }

  return (
    <>
      <ListItem
        secondaryAction={
          allowRemove && (
            <IconButton
              edge="end"
              aria-label="comments"
              color="primary"
              onClick={() => removeFaction(faction)}
            >
              <CloseIcon />
            </IconButton>
          )
        }
      >
        <ListItemText
          primary={faction + " " + factionRelation}
          secondary={loadedArmyBooks.length === 0 ? "Select at least one option" : ""}
          secondaryTypographyProps={{ sx: { color: "error.dark" } }}
        />
      </ListItem>
      {factionBooks.map((book, bookIndex) => {
        const enabled = loadedArmyBooks.some((x) => x.uid === book.uid);
        const selectSubfaction = () => {
          if (!enabled) {
            dispatch(
              getArmyBookData({
                armyUid: book.uid,
                gameSystem: armyState.gameSystem,
                reset: false,
              })
            );
          } else {
            remove(book.uid);
          }
        };
        return (
          <Fragment key={book.uid}>
            {bookIndex > 0 && <Divider sx={{ marginLeft: "26px" }} />}
            <ListItem
              secondaryAction={
                <Checkbox sx={{ right: "-12px" }} checked={enabled} onClick={selectSubfaction} />
              }
            >
              <ListItemText primary={book.name} sx={{ textIndent: "12px" }} />
            </ListItem>
          </Fragment>
        );
      })}
      <Divider />
    </>
  );
}
