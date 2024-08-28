import React, { useState } from 'react'
import { LuPencil } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/ActiveTodo.css'


function ActiveTodo({ todos, setTodos }) {

    const activeTodos = todos.filter((todo_obj) => !todo_obj.isCompleted && !todo_obj.isRemoved);
    const [updateTodoId, setUpdateTodoId] = useState(null)
    const [inputText, setInputText] = useState("")

    const updateTodoConfig = (id, text) => {
        setUpdateTodoId(id)
        setInputText(text)
    }

    const saveTodoUpdate = () => {
        const trimmedText = inputText.trim();
        if (trimmedText === "") {
            toast.error("Todo cannot be empty!");
            return;
        }

        const duplicateTodo = activeTodos.find(
            (todo_obj) => todo_obj.todo.toLowerCase() === trimmedText.toLowerCase() && todo_obj.id !== updateTodoId
        );
        if (duplicateTodo) {
            toast.error("Todo already exists!");
            return;
        }

        const updatedTodos = todos.map((todo_obj) => {
            if (todo_obj.id === updateTodoId) {
                return { ...todo_obj, todo: inputText };
            }
            return todo_obj;
        });
        setTodos(updatedTodos);

        setUpdateTodoId(null)
    }

    const removeTodo = (id) => {
        const updatedTodos = todos.map((todo_obj) => {
            if (todo_obj.id === id) {
                return { ...todo_obj, isRemoved: true };
            }
            return todo_obj;
        });
        setTodos(updatedTodos);
    }

    const completedTodo = (id) => {
        const updatedTodos = todos.map((todo_obj) => {
            if (todo_obj.id === id) {
                return { ...todo_obj, isCompleted: true };
            }
            return todo_obj;
        });
        setTodos(updatedTodos);
    }

    return (
        <div className='active-todo-outer'>
            <div className='active-todo-heading'>
                <span>Active Todos</span>
            </div>
            <div className='active-todo-body'>
                {
                    activeTodos && activeTodos.map((todo_obj) => {
                        return (
                            <div key={todo_obj.id} className='todo-div'>
                                <div className='todo-text'>
                                    {
                                        updateTodoId === todo_obj.id ? (
                                            <input className='todo-update-input' type='text' value={inputText} onChange={(event) => setInputText(event.target.value)} />
                                        ) : (
                                            <span>{todo_obj.todo}</span>
                                        )
                                    }
                                </div>
                                {
                                    updateTodoId === todo_obj.id ? (
                                        <button className='todo-update-button' onClick={saveTodoUpdate} >update</button>
                                    ) : (
                                        <div className='icons'>
                                            <span onClick={() => updateTodoConfig(todo_obj.id, todo_obj.todo)}><LuPencil size='13px' /></span>
                                            <span onClick={() => removeTodo(todo_obj.id)}><RxCross2 size='17px' /></span>
                                            <span onClick={() => completedTodo(todo_obj.id)}><FaCheck size='15px' /></span>
                                        </div>
                                    )
                                }

                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ActiveTodo;
