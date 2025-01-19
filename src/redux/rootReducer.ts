import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"

import storage from "redux-persist/lib/storage"
import themeSlice from "./slices/themeSlice"

const rootReducer = combineReducers({
  theme: themeSlice
})

export const persistedReducer = persistReducer(
  {
    key: "my_portifolio_by_jeanrd",
    storage
  },
  rootReducer
)
