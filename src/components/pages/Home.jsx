import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Home = () => {
    const userContext=useContext(UserContext)
  return (
    <div>
      This is Home Page
      {JSON.stringify(userContext)}
    </div>
  )
}

export default Home
