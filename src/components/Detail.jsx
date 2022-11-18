import React from 'react'
import './style.css'

export default function Detail(props) {


  return (
    <div  >
<button className='buttonDetails' style={{color:'green'}}>X</button>
<h1 className='Details'>name:{props.name}</h1>
<h1 className='Details' >desc:{props.desc}</h1>
<button onClick={()=>{props.del(props.index)}} className='buttonDetails' >DONE</button>
    </div>
  )
}
