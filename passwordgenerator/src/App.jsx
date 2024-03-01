import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  
  const generatorPassword = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      // console.log(char);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatorPassword()
  }, [length, numberAllowed, charAllowed])

  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 4)
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 border border-orange-500">
        <h1 className="text-3xl text-orange-400 text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3" value={password} placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPassToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input type="range" min={8} max={100} value={length} onChange={(e) => {setLength(e.target.value)
          console.log(e)}} name="" id="" className='cursor-pointer' />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" name="" id="" defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" name="" id="characterInput" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
