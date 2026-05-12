import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
const {userdata,setUserdata} = useContext(AuthContext)

  const [taskTittle, settaskTittle] = useState("");
  const [taskdescriptin, settaskdescriptin] = useState("");
  const [Assignto, setAssignto] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [catagory, setcatagory] = useState("");

  const [newtask, setNewtask] = useState([]);


  const submithandler = (e) => {
    e.preventDefault();

//     setNewtask ( {
//       taskTittle,
//       taskdescriptin,
//       taskDate,
//       catagory,
//       active: false,
//       newTask: true,  
//       failed: false,
//       completed: false,
//     });

//     const data = [...userdata.employees];
//     console.log(userdata.employees);
   
//     data.forEach((elem) => {
//       if (Assignto == elem.firstName) {
//          elem.tasks.push(newtask)
//         elem.taskCounts.newTask = (elem.taskCounts.newTask) + 1;
//       }
//     });
    
// setUserdata({ ...userdata, employees: data });
// localStorage.setItem('employees', JSON.stringify(data));
// console.log(data);
    
   
//     settaskTittle('')
//     setAssignto('')
//     setcatagory('')
//     settaskDate('')
//     settaskdescriptin('')
//   };

const taskObj = {
    taskTittle,
    taskdescriptin,
    taskDate,
    catagory,
    active: false,
    newTask: true, // Standardize to camelCase
    failed: false,
    completed: false,
  };

  // Clone employees to avoid direct mutation
  const data = [...userdata.employees];

data.forEach((elem) => {
    if (Assignto === elem.firstName) {
      elem.tasks.push(taskObj); // Use the local object, not the state 'newtask'
      elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1;
    }
  });

  // Update Global State
  setUserdata({ ...userdata, employees: data });
  
  // Persist to Local Storage
  localStorage.setItem('employees', JSON.stringify(data));

  // Clear inputs
  settaskTittle('');
  setAssignto('');
  setcatagory('');
  settaskDate('');
  settaskdescriptin('');
};

  return (
    <>
      <div className="mt-10 px-4 ">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col gap-8 bg-gray-900 rounded-2xl p-10 shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl font-semibold text-white mb-2 tracking-wide">
            Create New Task
          </h2>

          <div className="flex gap-8 flex-wrap">
            {/* Left Side - Details */}
            <div className="flex-1 min-w-[300px]">
              <div className="flex gap-6 flex-wrap">
                <div className="flex-1 min-w-[250px]">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Task Title
                  </h3>
                  <input
                    value={taskTittle}
                    onChange={(e) => {
                      settaskTittle(e.target.value);
                    }}
                    type="text"
                    placeholder="Make it design"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="flex-1 min-w-[250px]">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Date
                  </h3>
                  <input
                    value={taskDate}
                    onChange={(e) => {
                      settaskDate(e.target.value);
                    }}
                    type="date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex gap-6 flex-wrap mt-6">
                <div className="flex-1 min-w-[250px]">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Assign To
                  </h3>
                  <input
                    value={Assignto}
                    onChange={(e) => {
                      setAssignto(e.target.value);
                    }}
                    type="text"
                    placeholder="Employee name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="flex-1 min-w-[250px]">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Category
                  </h3>
                  <input
                    value={catagory}
                    onChange={(e) => {
                      setcatagory(e.target.value);
                    }}
                    placeholder="Design, dev, etc"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Description and Button */}
            <div className="flex-1 min-w-[300px] flex flex-col">
              <div className="flex-1">
                <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                  Description
                </h3>
                <textarea
                  value={taskdescriptin}
                  onChange={(e) => {
                    settaskdescriptin(e.target.value);
                  }}
                  rows="8"
                  placeholder="Enter task description"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button className="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 w-full mt-6 shadow-lg hover:shadow-emerald-500/20">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
