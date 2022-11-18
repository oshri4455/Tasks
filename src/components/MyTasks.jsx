import React , {useState}  from 'react'
import Detail from './Detail';
import Task from './Task';

export default function MyTasks(props) {

  const [showDetail,setShowDetail]=useState(false);

  const show=()=>{
    if(showDetail=== true){
    return <Detail  name={props.name} desc={props.desc}/>
    
    
    }
    
    
    }


  return (
    <div >

<h1 id='h1'>My Task</h1> 


{props.tasks.map((val)=>{
if(val.worker === 'oshri'){
  return <Task name={val.name}  desc={val.desc} worker={val.worker}/>

}

})}
{show()}
    </div>
  )
}
