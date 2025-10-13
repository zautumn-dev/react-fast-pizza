import { Link } from 'react-router-dom'

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-700 px-4 py-4 text-sm text-stone-100 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
