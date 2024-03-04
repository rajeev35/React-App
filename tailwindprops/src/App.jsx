import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Rajeev Kumar",
    age: 21

  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      

      <Card username = "Rajeev Kumar" btnText ="click me"
      />
      <Card username= "aPUN bJI jITEGA" btnText="Visit me" />
      
    </>
  )
}

export default App;
