import React from 'react'
import { useUserSelector } from '@/features/user/store/userSelector.js'

function UserName() {
  const userName = useUserSelector()
  return <>{userName ? <div className="hidden text-sm font-semibold md:inline-block">{userName}</div> : <p>Login</p>}</>
}

export default UserName
