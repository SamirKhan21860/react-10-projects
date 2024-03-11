import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

// import React from 'react'

const GitHub = () => {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/SamirKhan21860')
    //   .then((response) => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])

  return (
    <div>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg">GitHub: {data.followers}
        <img src={data.avatar_url} width={300} alt="Samir Khan" />
        </div>
    </div>
  )
}

export default GitHub

export const getGithubData = async () => {
  const response = await fetch('https://api.github.com/users/SamirKhan21860')
  return response.json()
}