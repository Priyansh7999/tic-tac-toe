import React from 'react'
export default function Square(props) {
  return (
    <button 
        className='flex justify-center text-2xl bg-custom-box text-custom-red font-mono items-center w-28 h-28 cursor-pointer' 
        onClick={props.onClick}
    >
        {props.value}
    </button>
  )
}
