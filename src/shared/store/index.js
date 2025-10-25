import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/features/user/store/userSlice.js'
import cartReducer from '@/features/cart/store/cartSlice.js'
if (typeof window !== 'undefined') console.log('Redux store created')

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  devTools: true,
})
