import React from 'react'
import ToDoItem from './ToDoItem';
const ToDos = (props) => {
  return (
    <div className="container">
      <h2 className="my-3">ToDoS List</h2>
      {/* //map return array */}
      {props.todos.length ===0 ? <h2>Oops !! Your ToDo List is Empty</h2>  : props.todos.map((todo)=>{
        return (
            <ToDoItem todo = {todo} key ={todo.srNo} onDelete = {props.onDelete}/>
        )
      })}


    </div>
  )
}

export default ToDos
