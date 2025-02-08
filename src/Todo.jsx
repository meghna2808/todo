import React, { useState } from 'react'

const Todo = () => {
    // const[tasks,setTasks]=use
    const[newTask,setNewTask]=useState("");
    const[task,setTask]=useState([]);
    const handleInputChange=(event)=>{
        setNewTask(event.target.value);
    }
    const addTask=()=>{
        if(newTask.trim()!=="")
        {
            setTask([...task,newTask]);
            setNewTask("")
         }
    }
        
    const deleteTask=(index)=>{
        const updatedTasks=task.filter((_,i)=>i!=index);
        setTask(updatedTasks);

    }
    const moveUp=(index)=>{
        if(index>0)
        {
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }
        
    }
    const moveDown=(index)=>{
        if(index<task.length-1)
        {
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
        
    }
  return (
    <div>
        <div className='to-do-list'>
        <h1>To-Do-List</h1>
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