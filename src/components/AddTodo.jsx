import React from 'react'
import '../css/AddTodo.css'

function AddTodo() {
  return (
    <div className='add-todo-outer'>
      <div className='add-todo-inner1'>
        <h5>Add Todo</h5>
      </div>
      <div className='add-todo-inner2'>
        <div className='input-container'>
          <input type="text" placeholder='Enter your todo...' />
          <button className='add-button'>+</button>
        </div>
      </div>
    </div>
  )
}


export default AddTodo