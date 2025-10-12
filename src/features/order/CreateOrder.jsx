import { useState } from 'react'
import { Form, redirect, useActionData, useNavigation } from 'react-router'
import { createOrder } from '@/shared/service/apiRestaurant.js'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str)

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  const error = useActionData()
  console.log(error)

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="post">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {error && error.phone && `${error.phone}`}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <div>
          <button disabled={isSubmitting}>{isSubmitting ? '正在下单...' : 'Order now'}</button>
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

  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
