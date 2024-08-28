import React from 'react'
import '../css/ActiveTodo.css'
import { LuPencil } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

function ActiveTodo({ todos, setTodos }) {

    const activeTodos = todos.filter((todo_obj) => !todo_obj.isCompleted && !todo_obj.isRemoved);

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
                                    <span>{todo_obj.todo}</span>
                                </div>
                                <div className='icons'>
                                    <span><LuPencil size='13px' /></span>
                                    <span onClick={() => removeTodo(todo_obj.id)}><RxCross2 size='17px' /></span>
                                    <span onClick={() => completedTodo(todo_obj.id)}><FaCheck size='15px' /></span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ActiveTodo;
