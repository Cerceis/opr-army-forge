import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { isServer } from '../services/Helpers';
import { ISelectedUnit } from './interfaces';

export interface GameplayState {
  lobbyId: string;
  userId: string;
  lists: IList[];
}

export interface IList {
  user: string;
  units: IGameplayUnit[];
  points: number;
}

export interface IGameplayUnit extends ISelectedUnit {
  activated: boolean;
  pinned: boolean;
  dead: boolean;
}

const initialState: GameplayState = {
  lobbyId: "",
  userId: isServer() ? "" : (sessionStorage["af_userId"] ?? (sessionStorage["af_userId"] = nanoid(8))),
  lists: []
};

export const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    resetGameplay(state) {
      return initialState;
    },
    setLobby(state, action: PayloadAction<string>) {
      state.lobbyId = sessionStorage["af_lastLobbyId"] = action.payload;
    },
    addList(state, action: PayloadAction<IList>) {
      state.lists.push(action.payload)
    },
    removeUser(state, action: PayloadAction<string>) {
      const userId = action.payload;
      state.lists = state.lists.filter(list => list.user !== userId);
    },
    modifyUnit(state, action: PayloadAction<{ user: string, unitId: string, modification: any }>) {
      const { user, unitId, modification } = action.payload;
      const list = state.lists.find(x => x.user === user);
      const unitIndex = list.units.findIndex(x => x.selectionId === unitId);
      list.units.splice(unitIndex, 1, { ...list.units[unitIndex], ...modification });
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLobby, addList, modifyUnit, removeUser, resetGameplay } = gameplaySlice.actions;

export default gameplaySlice.reducer;