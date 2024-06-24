import React, { useContext, useState } from 'react';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';
import { ToDoContext, usetodocontext } from '../todocontext/Todocontext';

const TodoList = () => {


const {activity,task,update,removeall,handalchange,changeupdate} = usetodocontext()
  
  return (
    <>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <div className="flex justify-center mb-4">
          <input 
            type="text" 
            className="w-2/3 border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activity} 
            onChange={handalchange} 
            placeholder="Add a new task"
          />

          {
            update?(<><button 
              onClick={changeupdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              Add
            </button></>):(<><button 
            onClick={changeupdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
          >
            Update
          </button></>)
          }
          
        </div>
        <TaskList  />
      </div>

<div className='-mt-[250px]'>

  {
    task.length>0?(
      <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-lg -mt-[100px]" onClick={removeall}>Remove All</button>

    ):(
      <></>
    )
  }
</div>
    </>
  );
}

export default TodoList;
