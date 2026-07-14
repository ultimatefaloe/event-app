import React from 'react'

const Button = ({onClick, buttonLabel}) => {
  return (
    <div>
      <button onClick={onClick} className='bg-blue-500 text-white px-4 py-2 rounded'>
        {buttonLabel}
      </button>
    </div>
  )
}

export default Button;