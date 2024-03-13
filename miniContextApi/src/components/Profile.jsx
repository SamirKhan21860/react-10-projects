import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>Profile : {user}</div>
  )
}

export default Profile