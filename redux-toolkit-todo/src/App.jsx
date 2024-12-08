import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux-toolkit-tutorial</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
