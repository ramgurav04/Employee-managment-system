import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Login, EmployeeDashboared, AdminDashboard } from "./components/Index";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInuser =  localStorage.getItem("loggedInuser");
     if(loggedInuser){
      const userData = JSON.parse(loggedInuser) 
      // setUser(userData.role)
      // setLoggedInUserdata
     }
  },[])

  const HandelLogin = (email, password) => {
   if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInuser", JSON.stringify({ role: "admin" }));
     } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserdata(employee);
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({ role: "employee",data:employee}),
        );
      }
    } else {
      alert("Invalid  Credentials");
    }
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <>
      {!user ? <Login handellogin={HandelLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' &&<EmployeeDashboared data={loggedInUserdata}/>)}
    </>
  );
};

export default App;
 

 