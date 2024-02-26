import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  const bgColor = {
    backgroundColor: color,
  }

  // function changeColor(color) {
  //   setColor(color)
  // }

  const arrColor = [
    "#F23030",
    "#00E3CC",
    "#267365",
    "#F29F05",
    "#FA7F08",
    "#FFEC5C",
  ];

  return (
    <>
      <div style={bgColor} className="w-full h-screen duration-200 bg-black">
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor(arrColor[0])}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => setColor(arrColor[1])}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            >
              Blue
            </button>
            <button onClick={() => setColor(arrColor[2])} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
