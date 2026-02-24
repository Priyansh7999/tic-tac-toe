import React from 'react'
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-slate-800 text-white p-4 flex justify-between ">
      <h1 className="text-2xl font-mono text-center">Tic Tac Toe</h1>
      <button
        className="cursor-pointer"
        onClick={() => window.open('https://github.com/Priyansh7999/tic-tac-toe')}
      >
        <FaGithub className='w-16 h-9'/>
      </button>
      
    </div>
  )
}
