import { useState } from 'react'
import './App.css'

function App() {
  //ui update is handled by react
  let [counter,setCounter]=useState(15);
  //variable is counter and setcounter is method  is method to update counter
  // let counter=15;
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Counter project</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
