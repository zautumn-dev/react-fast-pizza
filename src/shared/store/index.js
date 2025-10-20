import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/features/user/store/userSlice.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
