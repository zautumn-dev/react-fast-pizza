import LinkComponent from '@UI/components/LinkComponent.jsx'

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkComponent to="/menu">&larr; Back to menu</LinkComponent>

      <p className="mt-7 font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  )
}

export default EmptyCart
