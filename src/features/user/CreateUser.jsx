import { useState } from 'react'
import Button from '@UI/components/Button.jsx'

function CreateUser() {
  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="my-4 text-sm text-stone-600 md:text-base">👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="input h-8 w-72 py-6"
      />

      {username !== '' && (
        <div>
          <Button className="mt-8">Start ordering</Button>
        </div>
      )}
    </form>
  )
}

export default CreateUser
