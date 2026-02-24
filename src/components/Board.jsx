import React from 'react'
import Square from './Square'

export default function Board() {
  return (
    <div className="grid grid-cols-3 gap-2 w-48 h-48">
      <Square value="1" onClick={() => console.log('Square 1 clicked')} />
      <Square value="2" onClick={() => console.log('Square 2 clicked')} />
      <Square value="3" onClick={() => console.log('Square 3 clicked')} />
      <Square value="4" onClick={() => console.log('Square 4 clicked')} />
      <Square value="5" onClick={() => console.log('Square 5 clicked')} />
      <Square value="6" onClick={() => console.log('Square 6 clicked')} />
      <Square value="7" onClick={() => console.log('Square 7 clicked')} />
      <Square value="8" onClick={() => console.log('Square 8 clicked')} />
      <Square value="9" onClick={() => console.log('Square 9 clicked')} />
    </div>
  )
}
