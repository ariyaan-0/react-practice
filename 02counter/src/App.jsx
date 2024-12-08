import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//The counter will allow to increase or decrese value in the range of 0 to 20
function App() {
  // let counter = 5
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("Clicked", counter);
    // counter++;
    if(counter<20){
      setCounter(counter + 1);
    }
  }

  const reduceValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={reduceValue}>Remove value</button>
    </>
  )
}

export default App
