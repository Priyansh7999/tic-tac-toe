import React from 'react'
import Board from './components/Board'
import Header from './components/Header'
export default function App() {
  return (
    <div className='bg-custom-dark min-h-screen'>
      <Header />
      <Board />
    </div>
  )
}
