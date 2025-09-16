import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React-Core-Concept</h1>
      <Student></Student>
    </>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>name: </p>
      <p>dept: </p>
    </div>
  )
}

function Person() {
  const study = 'currently I am study at govt.titumir collage department of Botany'
  const age = 25;
  return (
    <p>I am Md. Soriful Islam {study} {age}</p>
  )
}

function Sports() {
  return (
    <div>
      <h1>Cricket</h1>
      <h6>kola</h6>
      <h5>komola</h5>
      <p>Bangladesh Team is Good.</p>
    </div>
  )
}

export default App
