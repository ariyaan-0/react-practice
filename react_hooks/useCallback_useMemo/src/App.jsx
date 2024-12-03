import { useState, useCallback, useMemo } from 'react'
import './App.css'
import Button from './Button'
import ShowCount from './ShowCount'
import Title from './Title'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increamentByOne=useCallback(()=>{
    setCount1((prevCount)=>prevCount+1);
  }, [])

  const increamentByFive=useCallback(()=>{
    setCount2((prevCount)=>prevCount+5);
  }, [])

  const isEvenOrOdd = useMemo(()=>{
    let i = 0;
    while(i<100000000){
      i+=1;
    }
    return count1%2===0;
  }, [count1])

  return (
    <div>
      <Title/>
      <ShowCount count={count1} title="Counter 1"/>
      <span>{isEvenOrOdd?'Even':'Odd'}</span>
      <Button handleClick={increamentByOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2"/>
      <Button handleClick={increamentByFive}>Increment by Five</Button>
    </div>
  )
}

export default App
