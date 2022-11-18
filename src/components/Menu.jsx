import React  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Menu(props) {

  const nav =useNavigate();
  return (
    <div style={{textAlign:'left'}}>
        <Link to={'allTask'}><button className='btn btn-primary' >all tasks</button></Link><br />
        <Link to={'myTasks'}><button className='btn btn-primary'  >my tasks</button></Link><br />
        <Link to={'newTask'}><button className='btn btn-primary' >new task</button></Link><br />
        <Link to={'history'}><button className='btn btn-primary' >history</button></Link><br />
        <Link to={'/'}><button className='btn btn-primary'  >exit</button></Link><br />




    </div>
  )
}
