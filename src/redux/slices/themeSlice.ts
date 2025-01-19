import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ThemeOptions = "light" | "dark" | "system"

interface ThemeState {
  mode: ThemeOptions
}

const initialState: ThemeState = {
  mode: "system"
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeOptions>) => {
      state.mode = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
