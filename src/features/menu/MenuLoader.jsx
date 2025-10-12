import { getMenu } from '@/shared/service/apiRestaurant.js'

export async function menuLoader() {
  return await getMenu()
}
