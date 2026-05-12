import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userdata, setUserdata } = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskdescriptin, settaskdescriptin] = useState("");
  const [Assignto, setAssignto] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [catagory, setcatagory] = useState("");

 const submithandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskdescriptin || !Assignto || !taskDate || !catagory) {
      alert("Please fill all fields");
      return;
    }

    const taskObj = {
      id: Date.now(),
      taskTitle: taskTitle,
      taskDescription: taskdescriptin,
      taskDate,
      category: catagory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Get latest data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || userdata.employees;
    
    // Clone to avoid mutation
    const updatedEmployees = employees.map(emp => ({
      ...emp,
      tasks: [...emp.tasks],
      taskCounts: { ...emp.taskCounts }
    }));

    let assigned = false;
    updatedEmployees.forEach((elem) => {
      if (Assignto.toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(taskObj);
        elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1;
        assigned = true;
      }
    });

    if (!assigned) {
      alert(`Employee "${Assignto}" not found!`);
      return;
    }

    // ✅ Update localStorage FIRST
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
    // ✅ Update context
    setUserdata({ ...userdata, employees: updatedEmployees });

    // ✅ Clear inputs
    settaskTitle('');
    setAssignto('');
    setcatagory('');
    settaskDate('');
    settaskdescriptin('');
    
    alert('Task assigned successfully!');
  };

  return (
    <>
      <div className="mt-10 px-4">
        <form
          onSubmit={submithandler}
          className="flex flex-col gap-8 bg-gray-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-gray-700"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 tracking-wide">
            Create New Task
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Details */}
            <div className="flex-1 min-w-[300px]">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Task Title
                  </h3>
                  <input
                    value={taskTitle}
                    onChange={(e) => settaskTitle(e.target.value)}
                    type="text"
                    placeholder="Make it design"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Date
                  </h3>
                  <input
                    value={taskDate}
                    onChange={(e) => settaskDate(e.target.value)}
                    type="date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <div className="flex-1">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Assign To
                  </h3>
                  <input
                    value={Assignto}
                    onChange={(e) => setAssignto(e.target.value)}
                    type="text"
                    placeholder="Employee name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">
                    Category
                  </h3>
                  <input
                    value={catagory}
                    onChange={(e) => setcatagory(e.target.value)}
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
                  onChange={(e) => settaskdescriptin(e.target.value)}
                  rows="8"
                  placeholder="Enter task description"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 w-full mt-6 shadow-lg hover:shadow-emerald-500/20"
              >
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