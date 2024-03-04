// import React from 'react'
import { PInputBox } from "./components/pIndex";
import currencyConverter from "/currencyConverter.jpg";
import "./App.css";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function PApp() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const bgImage = {
    backgroundImage: `url(${currencyConverter})`,
  };

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // const bgImageOptional = {
  //   backgroundImage: `url(https://img.freepik.com/free-vector/global-business-background-with-stock-chart-blue-tone_53876-119546.jpg?w=1380&t=st=1709467408~exp=1709468008~hmac=025b4ae427b54e332e4ee7d5d93baebc21c81ef1049d24d88ffac5176104fd78)`,
  //   backgroundImag: `url(https://img.freepik.com/free-vector/forex-trading-infographic-background_52683-40690.jpg?w=1380&t=st=1709467406~exp=1709468006~hmac=1ae14c617b5d3c245918558b1d1f6b8c40742add7b8dfa4728187c8369dcfe46)`,
  //   backgroundIma: `url(https://img.freepik.com/free-photo/cardano-blockchain-platform-collage_23-2150827491.jpg?w=1380&t=st=1709467406~exp=1709468006~hmac=14b3c9f8ad2f5af42bd663c0910faaa4fe7ff9bd322c690f012b9651883e9bc2)`,
  //   backgroundIm: `url(https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=1380&t=st=1709467405~exp=1709468005~hmac=bd5cec6bdbfad859f19df182a6fd9a0b375241b259970190d5fc8188f5ee5df9)`,
  //   backgroundI: `url(https://img.freepik.com/free-vector/abstract-background-big-data-concept_23-2148309419.jpg?t=st=1709467405~exp=1709468005~hmac=85d8c9567c1183053080c43d22b2de53c6f7f6db3ed1bb47aba78bcb9c1a8d23)`,
  //   background: `url(https://img.freepik.com/free-vector/forex-trading-background_52683-41605.jpg?w=1380&t=st=1709468092~exp=1709468692~hmac=d32f8680b9de243469dd0a4983b87124739a71fb6afd714aa7dbbe0bb93f734b)`,
  // };
  // console.log(bgImageOptional)
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-yellow-300 flex flex-wrap justify-center items-center bg-no-repeat"
        style={bgImage}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-red-500/20">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                convert()
              }}
              action=""
            >
              <div className="w-full mb-1">
                <PInputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                  className="font-semibold"
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  onClick={swap}
                  className="absolute z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 borer-white rounded-md backdrop-blur-lg bg-orange-500/90 text-white px-2 py-0.5 font-bold"
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <PInputBox
                  label="to"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <button
                type="submit"
                className="w-full font-bold backdrop-blur-lg bg-orange-500/70 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PApp;
