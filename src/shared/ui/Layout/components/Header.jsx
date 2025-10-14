import React from 'react'
import { Link } from 'react-router-dom'
import OrderSearch from '@UI/Layout/components/OrderSearch.jsx'
import UserName from '@/features/user/UserName.jsx'

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-400 bg-yellow-500 px-5 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        fast react pizza co.
      </Link>
      <OrderSearch />
      <UserName />
    </header>
  )
}

export default Header
