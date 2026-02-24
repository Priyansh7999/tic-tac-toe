import React from 'react'
export default function Square(props) {
    const [value, setValue] = React.useState(props.value);
    function handleClick() {
        setValue(value === 'X' ? 'O' : 'X');
    }
  return (
    <button 
        className='flex justify-center text-2xl bg-custom-box text-custom-red font-mono items-center w-28 h-28 cursor-pointer' 
        onClick={props.onClick}
    >
        {props.value}
    </button>
  )
}
