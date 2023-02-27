import React from 'react'

function ListTask({tasks,index,removeTask}) {
  
  return (
    <>
    <div className='list-task'>
    {tasks.title}
    <button onClick={()=>{removeTask(index)}} className='dlt-btn'>Delete</button>
    </div>
   
    </>
  )
}

export default ListTask