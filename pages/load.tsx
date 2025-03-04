import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Paper,
  Checkbox,
  Toolbar,
  AppBar,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import _ from "lodash";
import { Delete } from "@mui/icons-material";
import PersistenceService from "../services/PersistenceService";
import { ISaveData } from "../data/interfaces";
import ArmyImage from "../views/components/ArmyImage";
import { store } from "../data/store";
import { MenuBar } from "../views/components/MenuBar";
import { tryBack } from "../services/Helpers";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CloseIcon from "@mui/icons-material/Close";
import { useLongPress } from "use-long-press";
import UAParser from "ua-parser-js";
import DownloadFileIcon from "../views/icons/DownloadFile";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export default function Load() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();
  const [localSaves, setLocalSaves] = useState([]);
  const [forceLoad, setForceLoad] = useState(1);
  const [loading, setLoading] = useState(false);
  const [forceSelectMode, setForceSelectMode] = useState(false);
  const [selections, setSelections] = useState([] as string[]);
  const [isMobile, setIsMobile] = useState(false);

  const isSelected = (save) => selections.some((x) => x === save.list.creationTime);
  const parsedSaves = localSaves.map((key) => JSON.parse(localStorage[key]));

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const uaResult = new UAParser(ua);
    const device = uaResult.getDevice();
    setIsMobile(device.type === "mobile");
  }, []);

  useEffect(() => {
    const getSaves = () => Object.keys(localStorage).filter((k) => k.startsWith("AF_Save"));
    for (let save of getSaves()) {
      if (localStorage.getItem(save).indexOf('"listPoints":0') >= 0) delete localStorage[save];
    }

    setLocalSaves(getSaves());
  }, [forceLoad]);

  const importFile = () => {
    var fileInput = document.getElementById("file-input");
    fileInput.dispatchEvent(new MouseEvent("click"));
  };

  const onItemClick = (save: ISaveData) => {
    console.log("Item clicked");
    if (selections.length === 0 && !forceSelectMode) {
      loadSave(save);
    } else {
      selectSave(save);
    }
  };

  const loadSave = (save: ISaveData) => {
    setLoading(true);
    PersistenceService.load(dispatch, save, (armyData) => {
      router.push({
        pathname: "/list",
        query: { listId: save.list.creationTime },
      });
      setLoading(false);
    });
  };

  const forEachSelection = (callback) => {
    for (var selection of selections) {
      const actualKey = Object.keys(localStorage).find((x) => x.endsWith(selection));
      callback(JSON.parse(localStorage.getItem(actualKey)));
    }
    setForceLoad(forceLoad + 1);
    setLocalSaves([]);
    setForceSelectMode(false);
  };

  const selectSave = (save) => {
    setSelections((prev) =>
      isSelected(save)
        ? prev.filter((x) => x !== save.list.creationTime)
        : prev.concat(save.list.creationTime)
    );
  };

  const deleteSave = (save) => {
    PersistenceService.delete(save.list);
  };

  const selectionIsFavourite = (key) =>
    parsedSaves.find((x) => x.list.creationTime === key)?.favourite;

  const toggleFavourite = (save) => {
    // True when any are not favourite (= favourite all selections)
    const targetState = selections.some((x) => !selectionIsFavourite(x));
    PersistenceService.toggleFavourite(save, targetState);
  };

  const copyList = (save: ISaveData) => {
    PersistenceService.copyList(save);
  };

  const readSingleFile = (e) => {
    var file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const json: string = event.target.result as string;
        const saveData: ISaveData = JSON.parse(json);
        const creationTime = new Date().getTime().toString();
        saveData.list.creationTime = creationTime;

        PersistenceService.load(dispatch, saveData, (_) => {
          router.push("/list?listId=" + creationTime);

          PersistenceService.saveImport(creationTime, JSON.stringify(saveData));

          setLoading(false);
        });
      } catch (e) {
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  const SaveList = ({ saves }) => {
    return (
      <Paper square elevation={0}>
        <List sx={{ p: 0 }}>
          {_.sortBy(saves, (save) => save.modified)
            .reverse()
            .map((save) => (
              <SaveListItem
                key={save.list.creationTime}
                save={save}
                selected={isSelected(save)}
                onSelect={selectSave}
                onItemClick={onItemClick}
                showCheckbox={selections?.length > 0 || !isMobile || forceSelectMode}
                isMobile={isMobile}
              />
            ))}
        </List>
      </Paper>
    );
  };

  const favourites = parsedSaves.filter((s) => s.favourite);

  return (
    <>
      {selections.length === 0 && !forceSelectMode ? (
        <MenuBar
          title="Open a List"
          onBackClick={() => tryBack(() => router.replace("/"))}
          right={
            isMobile && (
              <Button color="inherit" onClick={() => setForceSelectMode((x) => !x)}>
                Select
              </Button>
            )
          }
        />
      ) : (
        <Paper elevation={2} square>
          <AppBar color="transparent" position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  setSelections([]);
                  setForceSelectMode(false);
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {selections.length} selected lists
              </Typography>
              <IconButton
                disabled={!selections.length}
                color="primary"
                onClick={() => forEachSelection(toggleFavourite)}
              >
                {selections.some((x) => !selectionIsFavourite(x)) ? (
                  <StarIcon />
                ) : (
                  <StarBorderIcon />
                )}
              </IconButton>
              <IconButton
                disabled={!selections.length}
                color="primary"
                onClick={() => {
                  forEachSelection(copyList);
                  setSelections([]);
                }}
              >
                <FileCopyIcon />
              </IconButton>
              <IconButton
                color="primary"
                disabled={!selections.length}
                onClick={() => {
                  if (confirm(`Are you sure you want to delete ${selections.length} list(s)?`)) {
                    forEachSelection(deleteSave);
                    setSelections([]);
                  }
                }}
              >
                <Delete />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Paper>
      )}
      <Container
        maxWidth={false}
        sx={{ mx: "auto", pt: 4, maxWidth: "480px", display: "flex", flexDirection: "column" }}
      >
        <input type="file" id="file-input" style={{ display: "none" }} onChange={readSingleFile} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => importFile()}
          sx={{ alignSelf: "center", px: 4 }}
        >
          <DownloadFileIcon fill="white" /> <span>&nbsp;Upload Army Forge File</span>
        </Button>
        {loading && (
          <Stack alignItems="center" mt={2}>
            <CircularProgress />
            <p>Loading army data...</p>
          </Stack>
        )}
        {favourites.length > 0 && (
          <>
            <p style={{ fontWeight: 600 }}>Favourite Lists</p>
            <SaveList saves={favourites} />
          </>
        )}
        <p style={{ fontWeight: 600 }}>Saved Lists</p>
        <SaveList saves={parsedSaves.filter((s) => !s.favourite)} />
      </Container>
    </>
  );
}

interface SaveListItemProps {
  save: ISaveData;
  selected: boolean;
  onItemClick: (save: ISaveData) => void;
  onSelect: (save: ISaveData) => void;
  showCheckbox: boolean;
  isMobile: boolean;
}

function SaveListItem({
  save,
  selected,
  onItemClick,
  onSelect,
  showCheckbox,
  isMobile,
}: SaveListItemProps) {
  const bindLongPress = useLongPress(() => onSelect(save), {
    onCancel: (_, { reason }) => {
      console.log("reason", reason);
      return reason === "canceled-by-timeout" && onItemClick(save);
    },
    detect: (isMobile ? "touch" : "mouse") as any,
    cancelOnMovement: 5,
  });
  //const selected = selections.some((x) => x === save.list.creationTime);
  const modified = new Date(save.modified);
  const time = modified.getHours() + ":" + modified.getMinutes();
  const points = save.listPoints;
  const title = (
    <>
      <Typography component="span" sx={{ fontWeight: 600 }}>
        {save.gameSystem?.toUpperCase()} - {save.list.name}
      </Typography>
      <Typography sx={{ color: "text.secondary" }} component="span">
        {" "}
        • {points}pts
      </Typography>
    </>
  );

  return (
    <ListItem
      key={save.list.creationTime}
      disablePadding
      secondaryAction={
        showCheckbox && <Checkbox checked={selected} onClick={() => onSelect(save)} />
      }
    >
      <ListItemButton {...bindLongPress()} selected={selected} disableGutters>
        <ListItemAvatar>
          <ArmyImage
            name={save.armyFaction || save.armyName}
            armyData={{ gameSystem: save.gameSystem }}
            size={"32px"}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ ml: 2, color: save.saveVersion >= 2 ? "" : "error.main" }}
          primary={title}
          secondary={
            save.saveVersion >= 2
              ? "Modified " + modified.toLocaleDateString() + " " + time
              : "Outdated save format!"
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
