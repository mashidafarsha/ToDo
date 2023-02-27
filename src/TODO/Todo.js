import React, { useEffect, useState } from 'react'
import ListTask from "./ListTask"
import AddTask from './AddTask';

function Todo() {
    const [task,setTask]=useState([])
     const addTask=(title)=>{
        const newTask=[...task,{title}]
        setTask(newTask);

      
     }
     useEffect(()=>{
        document.title=`you have ${task.length} pending task(s)`
    })
     const removeTask=(index)=>{
        const newTask=[...task]
        newTask.splice(index,1)
        setTask(newTask);
     } 

  return (
    <>
        <div className='todo-container'>
        <div className='header'>header</div>
        <div className='add-task'>
            <AddTask addTask={addTask}/>
        </div>
        <div className='task'>
            {task.map((task,index)=>(
               <ListTask key={index} tasks={task}  removeTask={removeTask} index={index}/>
            ))}
           
        </div>
        </div>
    </>
  )
}

export default Todo