import React from 'react'
import Header from '../other/Header';
import Tasklisnnumber from '../other/Tasklisnnumber';
import Tasklist from '../Tasklist/Tasklist';


const EmployeeDashboared = ({data}) => {
  
  return (
     <>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data={data} ></Header>
        <Tasklisnnumber data={data}/>
        <Tasklist data={data}/>
      </div>
     </>
  )
}

export default EmployeeDashboared;