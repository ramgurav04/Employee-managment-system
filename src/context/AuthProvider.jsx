import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userdata, setUserdata] = useState({
    employees: [],
    admin: []
  });

useEffect(() => {
    const data = getLocalStorage();
    if (data && data.employees) {
      setUserdata({
        employees: data.employees,
        admin: data.admin || []
      });
    }
  }, []);

  return (
    <div> 
  <AuthContext.Provider value = {{userdata,setUserdata}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;




 