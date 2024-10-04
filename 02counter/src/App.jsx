import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("Clicked", counter);
    // counter++;
    setCounter(counter + 1);
  }

  const reduceValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Remove value</button>
    </>
  )
}

export default App
