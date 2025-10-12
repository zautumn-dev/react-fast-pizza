import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSearch() {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="search..." value={query} onChange={e => setQuery(e.target.value)} />
    </form>
  )
}

export default OrderSearch
