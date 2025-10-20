import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/features/user/store/userSlice.js'
import cartReducer from '@/features/cart/store/cartSlice.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
})
