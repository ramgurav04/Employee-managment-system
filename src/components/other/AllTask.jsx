import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userdata, setUserdata } = useContext(AuthContext);
 
 const data = setUserdata.employees;

  if (!userdata || !userdata.employees) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-2xl font-bold">Loading Tasks...</h1>
      </div>
    );
  }

  return (
    <div className="mt-10 px-6">
      <div className="bg-gray-900 rounded-2xl p-10 shadow-2xl border border-gray-700 min-h-[400px]">
        {/* Header Row */}
        <div className="bg-red-500/90 px-8 py-5 rounded-xl flex justify-between items-center shadow-lg mb-4 text-white">
          <h2 className="w-1/5 text-xl font-bold">Employee Name</h2>
          <h3 className="w-1/5 text-xl font-bold text-center">New Task</h3>
          <h5 className="w-1/5 text-xl font-bold text-center">Active</h5>
          <h5 className="w-1/5 text-xl font-bold text-center">Complete</h5>
          <h5 className="w-1/5 text-xl font-bold text-center">Failed</h5>
        </div>

        {/* List Container */}
        <div className="h-[500px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {
          setUserdata.employees.map((elem, idx) => (
            <div
              key={idx}
              className="border-2 border-emerald-500/40 px-8 py-6 rounded-xl flex justify-between items-center shadow-lg hover:scale-[1.01] transition-all duration-200 mb-4"
            >
              <h2 className="w-1/5 text-xl font-semibold text-white">
                {elem.firstName}
              </h2>
              <h3 className="w-1/5 text-xl text-blue-400 font-bold text-center">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-xl text-yellow-400 font-bold text-center">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-xl text-white font-bold text-center">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-xl text-red-500 font-bold text-center">
                {elem.taskCounts.failed}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
