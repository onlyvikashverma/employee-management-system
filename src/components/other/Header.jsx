import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
  const logOutUser = () =>{
    localStorage.setItem("loggedInUser",'')
    props.changeUser('')
  }
  
  return (
    
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white'>Hello <br/> <span className='text-3xl font-semibold'>Vikash👋</span></h1>
        <button onClick={logOutUser}className='text-white bg-red-700 px-5 py-3 text-lg font-medium'>Log Out</button>
    </div>
    
  )
}

export default Header