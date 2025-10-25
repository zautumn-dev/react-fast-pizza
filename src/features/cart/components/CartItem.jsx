import { formatCurrency } from '@utils'
import Button from '@UI/components/Button.jsx'
import { useDispatch } from 'react-redux'
import { deleteItem } from '@/features/cart/store/cartSlice.js'
import DelCartItem from '@/features/cart/components/DelCartItem.jsx'
import UpdateItemQuantity from '@/features/cart/components/UpdateItemQuantity.jsx'

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  const dispatch = useDispatch()

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity} key={pizzaId} />

        <DelCartItem id={pizzaId} />
      </div>
    </li>
  )
}

export default CartItem
