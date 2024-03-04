import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData(currency) {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log(error);
      }

      fetchData(currency);
    }
  }, [currency]);

  console.log(data);
  
  return data[currency] || {};
}

export default useCurrencyInfo;
