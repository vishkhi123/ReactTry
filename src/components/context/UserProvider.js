import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { doLoginLocalStorage, getDataFromLocalStorage } from './LocalStorage'

const UserProvider = ({children}) => {

    const [isLogin,setIsLogin]=useState(false)
    const [userData,setUserData]=useState(null)

    useEffect(()=>{
        setUserData(getDataFromLocalStorage())
    },[])
    
    const doLogin=(data)=>{

        doLoginLocalStorage(data);
        setUserData(getDataFromLocalStorage());
    }

    


  return (
    <UserContext.Provider
    value={{
        isLogin:isLogin,
        setIsLogin:setIsLogin,
        userData:userData,
        setUserData:setUserData,
        login:doLogin
    }}
    >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
