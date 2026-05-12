import React from "react";
import { useContext, useEffect, useState } from "react";
import { Login, EmployeeDashboared, AdminDashboard } from "./components/Index";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  const [loading, setLoading] = useState(true);

  const { userdata, setUserdata } = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInuser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserdata(userData.data || null);
    }
    setLoading(false);
  }, []);

  const HandelLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = { name: "Admin", email: "admin@me.com" };
      setUser("admin");
      setLoggedInUserdata(adminData);
      localStorage.setItem(
        "loggedInuser",
        JSON.stringify({
          role: "admin",
          data: adminData,
        }),
      );
      return;
    }
    if (userdata.employees) {
      const employee = userdata.employees.find(
        (e) => e.email == email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserdata(employee);
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({ role: "employee", data: employee }),
        );
        return;
      }
    }
    alert("Invalid  Credentials");
  };

  // Loading screen
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {!user ? <Login handellogin={HandelLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeuser={setUser} data={loggedInUserdata} />
      ) : user === "employee" ? (
        <EmployeeDashboared changeuser={setUser} data={loggedInUserdata} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
