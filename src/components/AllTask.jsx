import React from 'react'
import Task from './Task'
import './style.css'

export default function AllTask(props) {


  return (




    <div >

<h1 id='h1'>All Task</h1> 

{props.tasks.map((val)=>{

return <Task add = {props.add} name={val.name}  worker={val.worker}/>

})}


    </div>
  )
}
