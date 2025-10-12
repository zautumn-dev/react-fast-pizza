import React from 'react'
import Header from '@UI/Layout/components/Header.jsx'
import CartOverview from '@/features/cart/CartOverview.jsx'
import { Outlet, useNavigation } from 'react-router'
import Loader from '@UI/Loader.jsx'

function Layout() {
  // 全局加载状态
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  )
}

export default Layout
