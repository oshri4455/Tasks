import React,{useState} from 'react'
import Detail from './Detail';
import './style.css'

export default function Task(props) {

const [showDetail,setShowDetail]=useState(false);

const show=()=>{
if(showDetail=== true){
return <Detail  add={props.add}  name={props.name} desc={props.desc}/>


}


}


  return (
    
    <div id='divTasks' onClick={()=>{setShowDetail(!showDetail)}}>
      <h1 style={{backgroundColor:'gray',color:'white',textAlign:'center'}} id='task'>name:{props.name} worker:{props.worker}</h1>
      
       {show()}

    </div>
  )
}
