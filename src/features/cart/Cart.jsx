import LinkComponent from '@UI/components/LinkComponent.jsx'
import Button from '@UI/components/Button.jsx'
import CartItem from '@/features/cart/components/CartItem.jsx'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function Cart() {
  const cart = fakeCart

  return (
    <div className="px-4 py-3">
      <LinkComponent to="/menu">&larr; Back to menu</LinkComponent>

      <h2 className="mt-7 text-xl font-semibold">Your cart, name</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map(item => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/create" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  )
}

export default Cart
