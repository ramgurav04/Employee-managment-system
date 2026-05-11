import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const Admindashboard = ({data}) => {
  return (
    <>
      <div className="h-screen w-full p-10 bg-gray-900 overflow-auto">
        <Header data={data}/>
        <CreateTask data={data}/>
        <AllTask data={data}/>
      </div>
    </>
  );
};

export default Admindashboard;