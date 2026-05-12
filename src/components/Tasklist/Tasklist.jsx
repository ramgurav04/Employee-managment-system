import React from "react";
import Accepttask from "./Accepttask";
import Newtask from './Newtask'
import Faildtask from "./Faildtask";
import Completetasklist from "./Completetasklist";

function Tasklist({ data }) {
  // ✅ Debug - remove after testing
  console.log("Tasklist received data:", data);
  
  return (
    <>
      <div
        id="tasklist"
        className="overflow-auto flex items-center justify-start py-5 h-[55%] w-full mt-10 gap-5 flex-nowrap px-5"
      >
        {data.tasks.map((elm, idx) => {
          // ✅ FIXED: newTask (camelCase), not Newtask
          if (elm.newTask) {
            return <Newtask key={idx} data={elm} />
          }
          if (elm.active) {
            return <Accepttask key={idx} data={elm} />
          }
          if (elm.completed) {
            return <Completetasklist key={idx} data={elm} />
          }
          if (elm.failed) {
            return <Faildtask key={idx} data={elm} />
          }
          return null;
        })}
      </div>
    </>
  );
}

export default Tasklist;