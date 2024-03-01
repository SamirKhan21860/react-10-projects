import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './../src/components/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const logo = {
    backgroundImage: `url(https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=300)`,
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={logo}>
        {/* <h1 className="bg-red-200">Test for tailwind</h1> */}
        <InputBox />
      </div>
    </>
  )
}

export default App
