import { useState } from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickCounter/>
      <HoverCounter/>
    </>
  )
}

export default App
