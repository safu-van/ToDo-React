import React from 'react'
import './App.css'
import NonActiveTodo from './components/NonActiveTodo'
import ActiveTodo from './components/ActiveTodo'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div>
      <div className='todo-top'>
        <div className='todo-heading'>
          <h4>ToDo App</h4>
        </div>
        <div className='add-todo'>
          <AddTodo />
        </div>
      </div>
      <div className='todo-body'>
        <div className='todo-box'>
          <NonActiveTodo />
        </div>
        <div className='todo-box active-todo'>
          <ActiveTodo />
        </div>
        <div className='todo-box'>
          <NonActiveTodo />
        </div>
      </div>
    </div>
  )
}

export default App