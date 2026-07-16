import React from 'react'

const Button = ({onClick, children, type="button"}) => {
  return (
    <div>
      <button type={type} onClick={onClick} className='w-full bg-blue-500 text-white px-4 py-2 rounded flex justify-center items-center'>
        {children}
      </button>
    </div>
  )
}

export default Button;