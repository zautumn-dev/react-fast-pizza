import { Form, redirect, useActionData, useNavigation } from 'react-router'
import { createOrder } from '@/shared/service/apiRestaurant.js'
import Button from '@UI/components/Button.jsx'
import { useUserAddress, useUserSelector } from '@/features/user/store/userSelector.js'
import { useCartList, useCartTotalCartPrice } from '@/features/cart/store/cartSelector.js'
import EmptyCart from '@/features/cart/components/EmptyCart.jsx'
import { store } from '@/shared/store/index.js'
import { clearCart } from '@/features/cart/store/cartSlice.js'
import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddressThunk } from '@/features/user/store/userSlice.js'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str)

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const [priority, setPriority] = useState('off')

  const dispatch = useDispatch()

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  const cart = useCartList()
  const fullName = useUserSelector()
  const cartTotalPrice = useCartTotalCartPrice()
  const error = useActionData()
  const userAddress = useUserAddress()

  const prioritiesPrice = priority === 'on' ? cartTotalPrice * 0.1 : 0
  const totalPrice = cartTotalPrice + prioritiesPrice

  if (!cart.length) return <EmptyCart />

  function handleGetPositionClick(e) {
    e.preventDefault()
    dispatch(fetchAddressThunk(111))
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>

          <input type="text" name="customer" required className="input grow" defaultValue={fullName} />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>

          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
          </div>
          {error && error.phone && `${error.phone}`}
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" required defaultValue={userAddress} />
            {/*{addressStatus === 'error' && (*/}
            {/*  <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{errorAddress}</p>*/}
            {/*)}*/}
          </div>

          {!userAddress && (
            <span className="top-[3px] right-[3px] z-50 md:top-[5px] md:right-[5px]">
              <Button
                type="small"
                onClick={e => {
                  e.preventDefault()
                  dispatch(fetchAddressThunk())
                }}>
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          {/* accent */}
          {/*https://tailwindcss.com/docs/accent-color*/}
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
            value={priority}
            onChange={e => setPriority(e.target.checked ? 'on' : 'off')}
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <div>
          {/* ring */}
          {/* https://tailwindcss.com/docs/box-shadow#adding-a-ring */}
          {/* disabled */}
          {/* https://tailwindcss.com/docs/hover-focus-and-other-states#disabled */}
          {/* https://tailwindcss.com/docs/cursor */}
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Order is being placed...' : `Order now from €${totalPrice}`}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export async function createOrderAction({ request }) {
  const data = Object.fromEntries(await request.formData())
  const error = {}

  if (!isValidPhone(data.phone)) error.phone = `能不能输入一个正确的手机号, fw`

  // return 的数据可以在组件中通过 useActionData 获取到
  if (Object.keys(error).length) return error

  // 表单数据处理
  const formData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  }

  const newOrder = await createOrder(formData)

  // 清空购物车
  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
