import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isServer } from '../services/Helpers';

export interface AppState {
  openReleaseNotes: boolean;
  darkMode?: boolean;
}

const initialState: AppState = {
  openReleaseNotes: false,
  darkMode: isServer() || !localStorage["af_darkMode"] ? undefined : localStorage["af_darkMode"] === "true"
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOpenReleaseNotes(state, action: PayloadAction<boolean>) {
      state.openReleaseNotes = action.payload;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload;
      localStorage["af_darkMode"] = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOpenReleaseNotes, setDarkMode } = appSlice.actions

export default appSlice.reducer