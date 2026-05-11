import React from 'react'

const Accepttask = ({data}) => {
  console.log()
  return (
    <div className="w-[300px] bg-red-400 h-full flex-shrink-0 rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div className='flex justify-between items-center'>
          <h3 className="text-sm bg-red-600 px-3 py-1 rounded font-semibold text-white"> {data.category}</h3>
          <h4 className="text-sm font-medium text-white"> {data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2 leading-tight text-white/90">
         {data.taskDescription}
        </p>
      </div>
      
      {/* Fixed Button Container */}
      <div className='flex justify-between gap-3 mt-5'>
        <button className='w-full bg-green-500 hover:bg-green-600 py-2 text-xs font-bold rounded text-white transition-colors'>
          Mark Completed
        </button>
        <button className='w-full bg-red-600 hover:bg-red-700 py-2 text-xs font-bold rounded text-white transition-colors'>
          Mark Failed
        </button>
      </div>
    </div>
  )
}

export default Accepttask