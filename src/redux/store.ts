import { configureStore } from '@reduxjs/toolkit'
import languagesListSlice from './slices/languagesListSlice'

export const store = configureStore({
  reducer: {
    languagesList: languagesListSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch