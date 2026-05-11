import React from 'react'

const Newtask = ({data}) => {
  return (
    <div className="w-[300px] bg-blue-400 h-full flex-shrink-0 rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div className='flex justify-between items-center'>
          <h3 className="text-sm bg-blue-600 px-3 py-1 rounded font-semibold text-white">{data.category}</h3>
          <h4 className="text-sm font-medium">{data.Date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white"> {data.Tittle}k</h2>
        <p className="text-sm mt-2 leading-tight">
           {data.taskDescription}
        </p>
      </div>
      <div className='mt-5'>
        <button className='bg-blue-600 w-full py-2 font-semibold rounded text-white text-sm transition-colors'>
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default Newtask