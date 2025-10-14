import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, disabled = false, className, to }) {
  const classNames = `submit ${className}`
  if (to)
    return (
      <Link to={to} className={classNames}>
        {children}
      </Link>
    )
  return (
    <button disabled={disabled} className={classNames}>
      {children}
    </button>
  )
}

export default Button
