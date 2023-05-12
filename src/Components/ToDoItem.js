import React from 'react'
import Header from './Header'
import Footer from './Footer'
const ToDoItem = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}

export default ToDoItem
