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
      <Department name="Mozumder" teck="Javascript"></Department>
      <Department name="Rajon" teck="React"></Department>
      <Department name="Shabana" teck="Java"></Department>
      <Device name="Laptop" source="Sumon vai" price="34000" users="2"></Device>
      <Device name="Monitor" source="Soriful" price="23000" users="6"></Device>
      <Device name="Desktop" source="Emon vai" price="62000" users="8"></Device>
      <Device name="Meraz" source="Loptop" price="98000" users="10"></Device>
      <Salami event="Rojar Eid" amount="200" person="Abba"></Salami>
      <Salami event="Kurbanir Eid" amount="50" person="amma"></Salami>
      <Salami event="Kurbanir Eid" amount="100" person="sister"></Salami>
      <Mobile name="i-fon+" price="1,30,000"></Mobile>
      <Mobile name='vivo-y51' price="29,000"></Mobile>
      <Book subject="English" mullo="300" lekhok='Munjerin Shahid'></Book>
      <Book subject="Bangla" mullo='200' lekhok='Abdul-Batin'></Book>
      <Book subject="Math" mullo='350' lekhok='Ketab-uddin'></Book>
    </>
  )
}

function Book ({subject, mullo, lekhok}){
  return(
    <div className='looking'>
      <p>Book: {subject}</p>
      <p>Range: {mullo}</p>
      <p>writer: {lekhok}</p>
    </div>
  )
}


function Mobile(props) {
  return (
    <div style={{
      border: "2px solid red",
      borderRadius: '30px',
      margin: '10px',
      padding: '20px',
      color: 'gray'
    }}>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
    </div>
  )
}


function Salami({ event, amount, person }) {
  return (
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount {amount}</p>
      <p>person {person}</p>
    </div>
  )
}

function Device(props) {
  return (
    <div style={{
      border: "3px solid red",
      borderRadius: "20px",
      marginTop: "20px",
      backgroundColor: 'gray',
      color: 'white'
    }}>
      <h3>Device: {props.name}</h3>
      <h4>Source: {props.source}</h4>
      <h4>Price: {props.price}</h4>
      <h5>Users: {props.users}</h5>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>name: </p>
      <p>dept: </p>
      <p>class: </p>
    </div>
  )
}


function Department(props) {
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      marginTop: '10px'
    }}>
      <h1>Development: {props.name}</h1>
      <p>Tecnology: {props.teck}</p>
    </div>
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


//npm run dev
