import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({children}) => {

    const [isLogin,setIsLogin]=useState(false)
    const [userData,setUserData]=useState(null)


  return (
    <UserContext.Provider
    value={{
        isLogin:isLogin,
        setIsLogin:setIsLogin,
        userData:userData,
        setUserData:setUserData
    }}
    >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
