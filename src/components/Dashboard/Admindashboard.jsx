import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const Admindashboard = (props) => {
  return (
    <>
      <div className="h-screen w-full p-10 bg-gray-900 overflow-auto">
        <Header changeuser={props.changeuser} data={props.data} />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
};

export default Admindashboard;
