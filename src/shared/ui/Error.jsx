import { useRouteError } from 'react-router'
import LinkComponent from '@UI/components/LinkComponent.jsx'

function Error() {
  const routeError = useRouteError()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{routeError.data ?? routeError.message}</p>
      <LinkComponent to="-1" />
    </div>
  )
}

export default Error
