import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/AddTodo.css';

function AddTodo({ todos, setTodos }) {

  const [inputText, setInputText] = useState("");
  const inputOnChange = (event) => setInputText(event.target.value);

  const addTodo = () => {

    // to check whether the input is empty or not
    const trimmedText = inputText.trim();
    if (trimmedText === "") {
      toast.error("Todo cannot be empty!");
      return;
    }

    // to check whether the todo already exists or not
    const duplicateTodo = todos.find(
      (todo_obj) => todo_obj.todo.toLowerCase() === trimmedText.toLowerCase()
    );
    if (duplicateTodo) {
      toast.error("Todo already exists!");
      return;
    }

    // add new todo to the todos state
    const newTodo = {
      id: uuidv4(),
      todo: trimmedText,
      isCompleted: false,
      isRemoved: false
    };
    setTodos([...todos, newTodo]);

    // add todos state to local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // to clear the input box after adding the todo
    setInputText("");

    toast.success("Todo added successfully!");
  };

  return (
    <div className='add-todo-outer'>
      <div className='add-todo-inner1'>
        <h5>Add Todo</h5>
      </div>
      <div className='add-todo-inner2'>
        <div className='input-container'>
          <input
            type="text"
            placeholder='Enter your todo...'
            value={inputText}
            onChange={inputOnChange}
          />
          <button className='add-button' onClick={addTodo}>+</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
