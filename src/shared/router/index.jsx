import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from '@router/routes.jsx'

const router = createBrowserRouter(routes)

// ❌ 错误：导出了 JSX 实例
// export default <RouterProvider router={router} />

function AppRouter(props) {
  return <RouterProvider router={router} />
}
export default AppRouter
