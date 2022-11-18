import {HashRouter,Routes,Route, json} from 'react-router-dom'
import {useEffect,useState} from 'react'
import './App.css';
import Menu from './components/Menu';
import SignIn from './components/SignIn';
import AllTask from './components/AllTask';
import MyTasks from './components/MyTasks';
import NewTask from './components/NewTask';
import History from './components/History';
import Detail from './components/Detail';







function App() {

// אחראי על הצגת התפריט או הסתרתו
const [menuFlag,setMenuFlag]=useState(false);
const [tasks,setTasks]=useState([]);

const [flag,setFlag]=useState(false)


const addToHistory = (index) =>{
let temp = [...tasks];
temp.splice(index,1)
setTasks([...temp])

setTasks([...tasks,temp])
fetch('/addHistory',{
  headers:{  'Accept': 'application/json',
'Content-Type': 'application/json'},
method:'post',
body:JSON.stringify({
del:temp
})
}).then((res)=>{
  return res.json()
}).then((data)=>{
  setFlag(!flag)
})
}
  




  useEffect(()=>{
  fetch('/getData').then((res)=>{
    return res.json()
  }).then((data)=>{
    setTasks(data)
  })
  },[flag])



const addNewTask =(n,d,w)=>{
let temp ={
  name:n,
  desc:d,
  worker:w
}
setTasks([...tasks,temp])

fetch('/addTask',{
headers:{  'Accept': 'application/json',
'Content-Type': 'application/json'},
method:'post',
body:JSON.stringify({
  task:temp
})
}).then((res)=>{
return res.json()
}).then((data)=>{
setFlag(!flag)
})


}







const showMenu =()=>{
if(menuFlag ===true){
return <Menu/>
}
}






  return (
    <div className="App">


<HashRouter>

{showMenu()}
<Routes>

<Route path='/' element={<SignIn  setMenuFlag={setMenuFlag}  />}/>
<Route path='/allTask' element={<AllTask del={addToHistory}  tasks={tasks}/>}/>
<Route path='/myTasks' element={<MyTasks  tasks = {tasks}  />}/>
<Route path='/newTask' element={<NewTask addNewTask={addNewTask}/>}/>
<Route path='/history' element={<History   add={addToHistory} />}/>



</Routes>
</HashRouter>




    </div>
  );
}

export default App;
