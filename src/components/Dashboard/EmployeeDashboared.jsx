import React from 'react'
import Header from '../other/Header';
import Tasklisnnumber from '../other/Tasklisnnumber';
import Tasklist from '../Tasklist/Tasklist';


const EmployeeDashboared = (props) => {
  
  return (
     <>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header changeuser={props.changeuser} data={props.data}></Header>
        <Tasklisnnumber  data={props.data}/>
        <Tasklist data={props.data}/>
      </div>
     </>
  )
}

export default EmployeeDashboared;