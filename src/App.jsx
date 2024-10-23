import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import './App.css'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick() {
    alert('button click');
  }
  function handleClick2() {
    alert('button click');
  }
  function addToFive() {
    alert(3 + 5);
  }

  return (
    <>
      <h1>React Core concept</h1>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => addToFive()}>Click Me5</button> */}
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
    </>
  )
}

export default App
