import { configureStore } from '@reduxjs/toolkit'
import pastesSlice from './redux/createSlice'

export const store = configureStore({
  reducer: {
    counter: pastesSlice ,
  },
})

