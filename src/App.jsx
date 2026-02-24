import React from 'react'
import Board from './components/Board'
import Header from './components/Header'
export default function App() {
  return (
    <div className='bg-slate-600 min-h-screen'>
      <Header />
      <Board />
    </div>
  )
}
