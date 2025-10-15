import React from 'react'
import { Link } from 'react-router-dom'

const baseStyle =
  'cursor-pointer rounded-full bg-yellow-400 font-semibold text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring-3 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed'

function Button({ children, disabled = false, className, to, type = 'primary' }) {
  const types = {
    primary: `${baseStyle} px-3 py-2 sm:px-5 sm:py-4 ${className}`,
    small: `${baseStyle} px-3 py-2 sm:px-4 sm:py-1.5 text-sm ${className}`,
    secondary: `cursor-pointer rounded-full border-2 border-stone-300 font-semibold text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-400 hover:text-stone-600 focus:text-stone-600 focus:ring-3 focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-3 py-2 sm:px-5 sm:py-4`,
  }
  if (to)
    return (
      <Link to={to} className={types[type]}>
        {children}
      </Link>
    )
  return (
    <button disabled={disabled} className={types[type]}>
      {children}
    </button>
  )
}

export default Button
