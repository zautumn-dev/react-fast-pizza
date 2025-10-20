import { formatCurrency } from '@utils'
import Button from '@UI/components/Button.jsx'
import { useDispatch } from 'react-redux'
import { deleteItem } from '@/features/cart/store/cartSlice.js'

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  const dispatch = useDispatch()

  function handleDelPizza() {
    dispatch(deleteItem(pizzaId))
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <Button type="small" onClick={handleDelPizza}>
          Delete
        </Button>
      </div>
    </li>
  )
}

export default CartItem
