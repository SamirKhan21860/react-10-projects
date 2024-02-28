import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 border border-orange-500">
        <h1 className="text-3xl text-orange-400 text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3" value={password} placeholder='Password' readOnly />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)
          console.log(e)}} name="" id="" className='cursor-pointer' />
        </div>
      </div>
    </>
  )
}

export default App
