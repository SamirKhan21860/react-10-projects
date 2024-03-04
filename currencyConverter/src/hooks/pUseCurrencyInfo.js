import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        async function fetchData(currency) {
            await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
            .catch((e) => console.log(e))
        }
        fetchData(currency)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo