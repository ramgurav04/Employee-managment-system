import React from 'react'

const Accepttask = ({ data }) => {
  return (
    <div className="w-[280px] sm:w-[300px] bg-red-400 h-full flex-shrink-0 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
      <div>
        <div className='flex justify-between items-center flex-wrap gap-2'>
          <h3 className="text-xs sm:text-sm bg-red-600 px-2 sm:px-3 py-1 rounded font-semibold text-white">
            {data.category || data.catagory || 'N/A'}
          </h3>
          <h4 className="text-xs sm:text-sm font-medium text-white">{data.taskDate || 'No date'}</h4>
        </div>
        <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-white">
          {data.taskTitle || data.taskTittle || 'Untitled'}
        </h2>
        <p className="text-xs sm:text-sm mt-2 leading-tight text-white/90">
          {data.taskDescription || data.taskdescriptin || 'No description'}
        </p>
      </div>
      <div className='flex justify-between gap-2 sm:gap-3 mt-4 sm:mt-5'>
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