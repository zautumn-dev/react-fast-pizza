import React from 'react'
import Header from '@UI/Layout/components/Header.jsx'
import CartOverview from '@/features/cart/CartOverview.jsx'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default Layout
