import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import { useRouter } from "next/router";
import { IconButton, InputAdornment, Input, Container, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";
import { MenuBar } from "../views/components/MenuBar";
import FactionSelection from "../views/armyBookSelection/FactionSelection";
import WarfleetFactionSelection from "../views/armyBookSelection/WarfleetFactionSelection";

export default function ArmyBookSelection() {
  const armyState = useSelector((state: RootState) => state.army);
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <MenuBar
        title="Create a new list"
        onBackClick={() => router.push("/gameSystem")}
        right={<SearchBox searchText={searchText} setSearchText={setSearchText} />}
      />

      <Container sx={{ mt: 2 }}>
        {/* <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          Choose {appendMode ? "another" : "an"} Army Book
        </Typography> */}
        {armyState.gameSystem === "ftl" ? (
          <WarfleetFactionSelection searchText={searchText} />
        ) : (
          <FactionSelection searchText={searchText} />
        )}
        {/* <ArmyBookList armyBooks={officialActiveArmies} onSelect={selectArmy} /> */}
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
