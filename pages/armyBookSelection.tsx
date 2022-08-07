import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, store } from "../data/store";
import { getArmyBookData, getArmyBooks, IArmyData, resetLoadedBooks } from "../data/armySlice";
import { useRouter } from "next/router";
import { IconButton, InputAdornment, Input, Container, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { resetList } from "../data/listSlice";
import _ from "lodash";
import { MenuBar } from "../views/components/MenuBar";
import { ArmyBookList } from "../views/armyBookSelection/ArmyBookList";

export default function ArmyBookSelection() {
  const armyState = useSelector((state: RootState) => state.army);
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();

  const appendMode = !!router.query["append"];

  const [searchText, setSearchText] = useState("");

  const search = (armies) =>
    armies?.filter((a) => {
      return (
        a.name.toLowerCase().includes(searchText.toLowerCase()) ||
        a.username?.toLowerCase().includes(searchText.toLowerCase())
      );
    });

  const allArmyBooks = armyState.armyBooks ?? [];
  const armyBooks = search(allArmyBooks);

  useEffect(() => {
    async function loadApiArmyBooks() {
      // Redirect to game selection screen if no army selected
      if (!armyState.gameSystem) {
        router.push({ pathname: "gameSystem/", query: router.query }, null, {
          shallow: true,
        });
        return;
      }

      if (!appendMode) {
        dispatch(resetLoadedBooks());
        // Clear any existing units?
        dispatch(resetList());
      }

      if (armyState.armyBooks.length < 1) dispatch(getArmyBooks(armyState.gameSystem));
    }

    loadApiArmyBooks();
  }, [armyState.gameSystem, armyState.armyBooks]);

  const officialFactions = _.groupBy(
    armyBooks?.filter((ca) => ca.official && ca.factionName) ?? [],
    (a) => a.factionName
  );

  const officialArmies = armyBooks
    ?.filter((ca) => ca.official && !ca.factionName)
    .concat(
      Object.keys(officialFactions).map((key) => {
        const rootArmy =
          officialFactions[key].find((x) => !x.factionRelation) || officialFactions[key][0];
        return {
          uid: rootArmy.uid,
          name: key,
          factionName: key,
          //factionRelation: officialFactions[key][0].factionRelation,
          official: true,
          // Live if any are live
          isLive: officialFactions[key].reduce((live, next) => live || next.isLive, false),
        };
      })
    );

  const officialActiveArmies = officialArmies?.filter((ca) => ca.isLive);

  async function selectArmy(army: IArmyData) {
    const uid = army.uid;
    const navigateToConfig = () => {
      const target = {
        pathname: "/listConfiguration",
        query: { ...router.query },
      };
      if (appendMode) {
        router.replace(target);
      } else {
        router.push(target);
      }
    };

    dispatch(
      getArmyBookData({
        armyUid: uid,
        gameSystem: armyState.gameSystem,
        reset: !appendMode,
      })
    ).then((res) => {
      navigateToConfig();
    });
  }

  return (
    <>
      <MenuBar
        title="Create a new list"
        onBackClick={() => router.push("/gameSystem")}
        right={<SearchBox searchText={searchText} setSearchText={setSearchText} />}
      />

      <Container sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          Choose {appendMode ? "another" : "an"} Army Book
        </Typography>
        <ArmyBookList armyBooks={officialActiveArmies} onSelect={selectArmy} />
      </Container>
    </>
  );
}

function SearchBox({ searchText, setSearchText }) {
  return (
    <Input
      sx={{
        flex: 1,
        color: "common.white",
      }}
      id="txtSearch"
      size="small"
      autoComplete="off"
      disableUnderline
      onChange={(e) => setSearchText(e.target.value)}
      value={searchText}
      inputProps={{ style: { textAlign: "right", color: "common.white" } }}
      endAdornment={
        <InputAdornment position="end" sx={{ width: "2rem", color: "common.white" }}>
          {searchText ? (
            <IconButton size="small" onClick={() => setSearchText("")}>
              <ClearIcon sx={{ color: "common.white" }} />
            </IconButton>
          ) : (
            <SearchIcon
              onClick={() => {
                document.getElementById("txtSearch").focus();
              }}
            />
          )}
        </InputAdornment>
      }
    />
  );
}
