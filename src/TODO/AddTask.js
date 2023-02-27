import React, { useState } from 'react'


function AddTask({addTask}) {
  const [value,setvalue]=useState("")
  const addItem=()=>{
    addTask(value)
    setvalue("")
  }
  return (
    <>
    <div className='input-container'>
      <input className='input' placeholder='Add content' type="text" value={value}
      onChange={(e)=>{
        setvalue(e.target.value)
      }}
      />
      <button onClick={addItem} className='add-btn'>Add</button>
    </div>
    </>
  )
}

export default AddTask