import React from 'react'
import Button from '@UI/components/Button.jsx'
import { decreaseItemQuantity, increaseItemQuantity } from '@/features/cart/store/cartSlice.js'
import { useDispatch } from 'react-redux'

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  )
}

export default UpdateItemQuantity
