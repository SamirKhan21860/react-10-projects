import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const logo = {
    backgroundImage: `url(https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=300)`,
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={logo}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }} action="">
              <div className="w-full mb-1">
                <InputBox label="from" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setFrom(currency)} onAmountChange={(amount) => setAmount(amount)} selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0 5">
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox label="to" currencyOptions={options} amount={convertedAmount} onCurrencyChange={(curency) => setTo(curency)} selectedCurrency={to} amountDisabled
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
