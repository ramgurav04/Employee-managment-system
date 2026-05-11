import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = ( props) => {
  // const [username, setUsername] = useState('');

  // if(data){
  //   setUsername("admin")
  // }else{
  //   setUsername(data.firstName)
  // }

  const Logoutuser = () =>{
     localStorage.setItem('loggedInuser','')
     props.changeuser('')
     
    //  window.location.reload()

  }

  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className='text-2xl font-medium text-white'>
          Hello <br /> <span className="text-3xl font-semibold text-white"> {props.data?.firstName} 🖐</span>
        </h1>
        <button className="bg-red-500 py-2 px-5 rounded-sm text-lg font-medium" onClick={  Logoutuser}>Log Out</button>
      </div>
    </>
  );
};

export default Header;
