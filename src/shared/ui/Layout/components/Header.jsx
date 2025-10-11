import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <p>LUPINUS</p>
    </header>
  )
}

export default Header
