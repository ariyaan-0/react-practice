import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Time from './components/Time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <Time/>
    </>
  )
}

export default App
