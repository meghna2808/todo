import React, { useState } from 'react'

const Todo = () => {
    // const[tasks,setTasks]=use
    const[newTask,setNewTask]=useState("");
    const[task,setTask]=useState(["eat breakfast","brush your teeths","do assingment"]);
    const handleInputChange=(event)=>{
        setNewTask(event.target.value);
    }
    const addTask=()=>{
        // setTask(newTask);
    }
    const deleteTask=(index)=>{

    }
    const moveUp=(index)=>{
        
    }
    const moveDown=(index)=>{
        
    }
  return (
    <div>
        <div className='to-do-list'>
        <h1>To do</h1>
        <input placeholder='enter the text' type='text' value={newTask} onChange={handleInputChange}></input>
        <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {task.map((task,index)=>
                <li className=''key={index}>
                    <span className='text'>{task}</span>
                    <button  className='delete-button' onClick={()=>{deleteTask(index)}}>Delete</button>
                    <button className='move-button' onClick={()=>{moveUp(index)}} >Move up</button>
                    <button className='move-button' onClick={()=>{moveDown(index)}}>Move down</button>
                </li>
            )}
        </ol>
        
    </div>
  )
}

export default Todo