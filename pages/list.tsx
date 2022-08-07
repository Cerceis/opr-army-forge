import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import { useMediaQuery } from "react-responsive";
import MobileView from "../views/listBuilder/MobileView";
import DesktopView from "../views/listBuilder/DesktopView";
import { useLoadFromQuery } from "../hooks/useLoadFromQuery";

export default function List() {
  const armyState = useSelector((state: RootState) => state.army);

  useLoadFromQuery();

  // Break from mobile to desktop layout at 1024px wide
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      <Head>
        <title>OPR Army Forge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {armyState.loaded && (isBigScreen ? <DesktopView /> : <MobileView />)}
    </>
  );
}
