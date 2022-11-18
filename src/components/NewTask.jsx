import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MyTasks from './MyTasks';
import './style.css'
export default function NewTask(props) {

const[name,setName]=useState('');
const[desc,setDesc]=useState('');
const[worker,setWorker]=useState('');
const [index,setindex] = useState(0)



  


const nav =useNavigate();

  return (
    <div id='divs'>
     <h1 id='h1'>New Task</h1> 
<input className='inpt' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='name' /><br />
<input className='inpt' onChange={(e)=>{setDesc(e.target.value)}} type="text" placeholder='desc' /><br />
<input className='inpt' onChange={(e)=>{setWorker(e.target.value)}} type="text" placeholder='worker' /><br />
<button id='buttonInpt' onClick={()=>{props.addNewTask(name,desc,worker); nav('/allTask')}}>add new task</button>

    </div>
  )
}
