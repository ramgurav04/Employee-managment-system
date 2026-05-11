import React from 'react'

const Faildtask = ({data}) => {
  return (
    <div className="w-[300px] bg-yellow-400 h-full flex-shrink-0 rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div className='flex justify-between items-center'>
          <h3 className="text-sm bg-red-600 px-3 py-1 rounded font-semibold text-white"> {data.category}</h3>
          <h4 className="text-sm font-medium text-gray-800">{data.Date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-gray-900">{data.taskTitle}</h2>
        <p className="text-sm mt-2 leading-tight text-gray-800">
           {data.taskDescription}
        </p>
      </div>
      <div className='mt-5'>
        <button className='bg-red-500 w-full py-2 font-semibold rounded text-white text-sm transition-colors'>
          Retry Task
        </button>
      </div>
    </div>
  )
}

export default Faildtask