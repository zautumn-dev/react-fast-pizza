import { useNavigate } from 'react-router-dom'
import { useRouteError } from 'react-router'

function Error() {
  const navigate = useNavigate()

  const routeError = useRouteError()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{routeError.data ?? routeError.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  )
}

export default Error
