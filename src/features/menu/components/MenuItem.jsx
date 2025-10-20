import { formatCurrency } from '@utils'
import Button from '@UI/components/Button.jsx'
import { useDispatch } from 'react-redux'
import { addItem } from '@/features/cart/store/cartSlice.js'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  const dispatch = useDispatch()

  function addMenuItemToCart() {
    if (!id) return
    dispatch(
      addItem({
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
      }),
    )
  }

  return (
    // gap
    // https://tailwindcss.com/docs/gap
    <li className="flex gap-4 py-3">
      <img src={imageUrl} alt={name} className={`${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className="mt-0.5 flex grow flex-col">
        <p className="font-semibold">{name}</p>
        {/*italic -> 斜体 capitalize -> 首字母大写*/}
        <p className="text-sm text-stone-400 capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="flex items-center text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="flex items-center text-sm font-semibold text-stone-300 uppercase">Sold out</p>
          )}
          {soldOut ? (
            ''
          ) : (
            <Button type="small" onClick={addMenuItemToCart}>
              add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
