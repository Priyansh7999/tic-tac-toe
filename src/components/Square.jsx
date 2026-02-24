import React from 'react'
export default function Square(props) {
  return (
      <button className='flex justify-center items-center w-16 h-16 border border-gray-300 cursor-pointer' onClick={props.onClick}>
        <p className="text-xl font-bold">{props.value}</p>
      </button>
  )
}
