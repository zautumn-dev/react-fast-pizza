import { useLoaderData } from 'react-router'
import MenuItem from '@/features/menu/components/MenuItem.jsx'

function Menu() {
  const menus = useLoaderData()

  return (
    <ul>
      {menus.map(menu => (
        <MenuItem key={menu.id} pizza={menu} />
      ))}
    </ul>
  )
}

export default Menu
