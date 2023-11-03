import { useState } from 'react'
import { Button } from './components/button'
import { Button2 } from './components/button2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button></Button>
        <Button2></Button2> 
      </div>
    </>
  )
}

export default App
