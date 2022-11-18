import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';




export default function SignIn(props) {
const[userName,setUserName] = useState('')
const [password,setPassword] = useState('')
const nav =useNavigate();

  return (
    <div id='borderLogin'>
      <h1>Tasks Manger</h1>
        
<input onChange={(e)=>{setUserName(e.target.value)}} name='userName' className='userName' type="text" placeholder='user name' /><br />
<input onChange={(e)=>{setPassword(e.target.value)}} name='password' className='userName' type="text" placeholder='password' /><br />
<button id='Enter' onClick={()=>{props.setMenuFlag(true); nav('/allTask')}}>ENTER</button>


    </div>
  )
}
