import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userdata, setUserdata] = useState({
    employees: [],
    admin: []
  });

    useEffect(()=>{
          const {employees,admin} = getLocalStorage();
          setUserdata({ employees, admin });

    },[])

  return (
    <div> 
        <AuthContext.Provider value={userdata}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;