import { Navigate } from 'react-router'

import Home from '@UI/Home.jsx'
import Menu from '@/features/menu/Menu.jsx'
import Cart from '@/features/cart/Cart.jsx'
import Order from '@/features/order/Order.jsx'
import CreateOrder from '@/features/order/CreateOrder.jsx'
import Layout from '@UI/Layout/index.jsx'
import Error from '@UI/Error'

import { menuLoader } from '@/features/menu/MenuLoader.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    // 子路由 error 会冒泡到父路由
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: 'order/create',
        element: <CreateOrder />,
      },
      {
        path: '/order/:id',
        element: <Order />,
      },
    ],
  },

  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]
