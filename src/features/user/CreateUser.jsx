import { useEffect, useState } from 'react'
import Button from '@UI/components/Button.jsx'
import { useDispatch } from 'react-redux'
import { updateUserInfo } from '@/features/user/store/userSlice.js'
import { useNavigate } from 'react-router-dom'
import { useUserSelector } from '@/features/user/store/userSelector.js'
import { Navigate } from 'react-router'

function CreateUser() {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 登录状态重定向到 menu
  // const fullName = useUserSelector()
  // if (fullName) return <Navigate to="/menu" />

  function handleSubmit(e) {
    e.preventDefault()
    if (!username) return
    dispatch(updateUserInfo(username))
    navigate('/menu')
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
