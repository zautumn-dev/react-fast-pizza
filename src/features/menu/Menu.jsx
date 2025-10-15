import { useLoaderData } from 'react-router'
import MenuItem from '@/features/menu/components/MenuItem.jsx'

function Menu() {
  const menus = useLoaderData()

  return (
    // divide width
    // https://tailwindcss.com/docs/border-width#between-children
    <ul className="divide-y divide-stone-400 px-4">
      {menus.map(menu => (
        <MenuItem key={menu.id} pizza={menu} />
      ))}
    </ul>
  )
}

export default Menu
