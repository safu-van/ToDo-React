import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import NonActiveTodo from './components/NonActiveTodo'
import ActiveTodo from './components/ActiveTodo'
import AddTodo from './components/AddTodo'

function App() {

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  
  const completedTodos = todos.filter((todo_obj) => todo_obj.isCompleted);
  const removedTodos = todos.filter((todo_obj) => todo_obj.isRemoved);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <ToastContainer />
      <div className='todo-top'>
        <div className='todo-heading'>
          <h4>ToDo App</h4>
        </div>
        <div className='add-todo'>
          <AddTodo todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <div className='todo-body'>
        <div className='todo-box'>
          <NonActiveTodo heading={'Removed Todos'} todos={removedTodos} />
        </div>
        <div className='todo-box active-todo'>
          <ActiveTodo todos={todos} setTodos={setTodos} />
        </div>
        <div className='todo-box'>
          <NonActiveTodo heading={'Completed Todos'} todos={completedTodos} />
        </div>
      </div>
    </div>
  )
}

export default App
