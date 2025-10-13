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
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-4xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  )
}

export default Layout
