import { useState } from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounter2 from './components/ClickCounter2'
import HoverCounter2 from './components/HoverCounter2'
import Counter from './components/Counter'


function App() {

  return (
    <>
      {/* <ClickCounter/> */}
      {/* <ClickCounter2/> */}
      {/* <HoverCounter/> */}
      {/* <HoverCounter2/> */}
      <Counter render={(count, incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount}/>}/>

    </>
  )
}

export default App
