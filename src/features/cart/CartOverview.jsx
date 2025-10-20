import { Link } from 'react-router-dom'
import { useCartTotalCartPrice, useCartTotalQuantity } from '@/features/cart/store/cartSelector.js'

function CartOverview() {
  const totalPrice = useCartTotalCartPrice()
  const quantity = useCartTotalQuantity()

  if (!quantity) return null
  return (
    <div className="flex items-center justify-between bg-stone-700 px-4 py-4 text-sm text-stone-100 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold">
        <span>{quantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
