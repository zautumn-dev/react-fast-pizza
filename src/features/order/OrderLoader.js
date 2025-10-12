import { getOrder } from '@/shared/service/apiRestaurant.js'

export async function OrderLoader({ params }) {
  return await getOrder(params.orderId)
}
