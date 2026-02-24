import React from 'react'

export default function Square(props) {
  return (
      <button className='flex justify-center items-center w-16 h-16 border border-gray-300' onClick={props.onClick}>
        {props.value}
      </button>
  )
}
