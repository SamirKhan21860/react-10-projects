// import React from 'react'

import { useId } from "react";

const PInputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div
      className={`p-3 backdrop-blur-lg bg-white/30 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={id}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-md px-1 bg-gray-200 curosr-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          name=""
          id=""
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PInputBox;
