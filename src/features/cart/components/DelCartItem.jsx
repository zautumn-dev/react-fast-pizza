import React from 'react'
import Button from '@UI/components/Button.jsx'
import { deleteItem } from '@/features/cart/store/cartSlice.js'
import { useDispatch } from 'react-redux'

function DelCartItem({ id }) {
  const dispatch = useDispatch()

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  )
}

export default DelCartItem
