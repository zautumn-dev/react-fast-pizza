import { useSelector } from 'react-redux'

export const useCartTotalCartPrice = () =>
  useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0))

export const useCartLen = () => useSelector(state => state.cart.cart.length)

export const useCartTotalQuantity = () =>
  useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0))

export const useCartList = () => useSelector(state => state.cart.cart)

export const useCartQuantityById = id =>
  useSelector(state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0)
