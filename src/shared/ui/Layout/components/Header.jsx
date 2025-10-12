import React from 'react'
import { Link } from 'react-router-dom'
import OrderSearch from '@/features/order/components/OrderSearch.jsx'

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <OrderSearch />
      <p>LUPINUS</p>
    </header>
  )
}

export default Header
