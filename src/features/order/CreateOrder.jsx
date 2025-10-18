import { Form, redirect, useActionData, useNavigation } from 'react-router'
import { createOrder } from '@/shared/service/apiRestaurant.js'
import Button from '@UI/components/Button.jsx'

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
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>

          <input type="text" name="customer" required className="input grow" />
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
            <input type="text" name="address" required className="input w-full" />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          {/* accent */}
          {/*https://tailwindcss.com/docs/accent-color*/}
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"

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
          <Button disabled={isSubmitting}>{isSubmitting ? 'Order is being placed...' : 'Order now'}</Button>
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
