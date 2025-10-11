import Home from '@UI/Home.jsx'
import Error from '@UI/Error.jsx'
import Menu from '@/features/menu/Menu.jsx'
import Cart from '@/features/cart/Cart.jsx'
import Order from '@/features/order/Order.jsx'
import CreateOrder from '@/features/order/CreateOrder.jsx'
import { Navigate } from 'react-router'
import Layout from '@UI/Layout/index.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
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

  {
    path: '*',
    element: <Error />,
  },
]
