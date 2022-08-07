import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameRules } from "../data/armySlice";
import { RootState } from "../data/store";
import PersistenceService from "../services/PersistenceService";

export function useLoadFromQuery() {
  const armyState = useSelector((state: RootState) => state.army);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    // Redirect to game selection screen if no army selected
    if (!armyState.loaded) {
      const listId = router.query["listId"] as string;
      if (listId) {
        PersistenceService.loadFromKey(dispatch, listId);
        return;
      }

      router.push({ pathname: "/gameSystem", query: router.query }, null, {
        shallow: true,
      });
      return;
    } else {
      dispatch(getGameRules(armyState.gameSystem));
    }
  }, [router.query]);
}