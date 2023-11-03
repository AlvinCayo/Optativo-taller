import { useState } from 'react'
import { Name } from './components/name'
import { Paragraph } from './components/paragraph'
import { Profile } from './components/profile'
import { Button } from './components/button'
import { Button2 } from './components/button2'
import './App.css'

function App() {
  return (
    <>
      <div className='card1'>
        <Profile></Profile>
        <Name></Name>
        <Paragraph></Paragraph>
        <Button></Button>
        <Button2></Button2>
      </div>
    </>
  )
}

export default App
