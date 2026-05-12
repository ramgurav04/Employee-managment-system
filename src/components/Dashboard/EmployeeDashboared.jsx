import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import Tasklisnnumber from "../other/Tasklisnnumber";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboared = (props) => {
  const [employeeData, setEmployeeData] = useState(props.data);

  // ✅ Refresh function - gets latest data from localStorage
  const refreshData = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInuser"));
    if (loggedInUser?.data) {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const updatedEmployee = employees.find(
        (emp) => emp.email === loggedInUser.data.email,
      );
      if (updatedEmployee) {
        setEmployeeData(updatedEmployee);
        // Update loggedInuser with fresh data
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({
            role: "employee",
            data: updatedEmployee,
          }),
        );
      }
    }
  };

  // ✅ Auto-refresh on mount and focus
  useEffect(() => {
    refreshData(); // Load fresh data on mount

    window.addEventListener("focus", refreshData);
    window.addEventListener("storage", refreshData);

    return () => {
      window.removeEventListener("focus", refreshData);
      window.removeEventListener("storage", refreshData);
    };
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-[#1c1c1c] min-h-screen">
      <Header
        changeuser={props.changeuser}
        data={employeeData}
        onRefresh={refreshData}
      />

      {/* ✅ Refresh Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={refreshData}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Refresh Tasks
        </button>
      </div>

      <Tasklisnnumber data={employeeData} />
      <Tasklist data={employeeData} />
    </div>
  );
};

export default EmployeeDashboared;
