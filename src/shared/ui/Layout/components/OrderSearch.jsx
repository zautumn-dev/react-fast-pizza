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
      {/* transition */}
      {/*https://tailwindcss.com/docs/transition-property*/}
      <input
        type="text"
        placeholder="search..."
        className="focus:ring-opacity-30 w-36 rounded-full bg-yellow-100 px-4 py-1 text-sm transition-all duration-300 placeholder:text-stone-500 focus:ring focus:ring-yellow-400 focus:outline-none sm:w-64 sm:focus:w-72"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}

export default OrderSearch
