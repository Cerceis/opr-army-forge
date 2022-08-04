import { useDispatch } from "react-redux";
import { setGameSystem } from "../data/armySlice";
import { useRouter } from "next/router";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { MenuBar } from "../views/components/MenuBar";
import { Container } from "@mui/system";

function selectGameSystem(dispatch, router, gameSystem: string) {
  dispatch(setGameSystem(gameSystem));
  router?.push({
    pathname: "/armyBookSelection",
    query: { ...router.query, gameSystem: gameSystem },
  });
}

export default function GameSystem() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query) {
      console.log(router.query);
      const gameSystem = router.query.gameSystem as string;
      if (gameSystems.includes(gameSystem)) selectGameSystem(dispatch, router, gameSystem);
    }
  }, []);

  const gameSystems = ["gf", "gff", "aof", "aofs", "aofr", "ftl"];

  return (
    <>
      <MenuBar title="Create a new list" onBackClick={() => router.push("/")} />
      <Container maxWidth={false} sx={{ maxWidth: "480px", mx: "auto", mt: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          Select Game System
        </Typography>
        <Grid container spacing={2}>
          {gameSystems.map((gameSystem) => (
            <GameSystemTile key={gameSystem} gameSystem={gameSystem} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

function GameSystemTile({ gameSystem }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Grid item xs={6}>
      <img
        onClick={() => selectGameSystem(dispatch, router, gameSystem)}
        src={`img/${gameSystem}_cover.jpg`}
        className="interactable"
        style={{
          height: "auto",
          maxWidth: "100%",
          borderRadius: "4px",
          display: "block",
        }}
      />
    </Grid>
  );
}
