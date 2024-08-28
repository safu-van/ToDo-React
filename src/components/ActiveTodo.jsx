import React from 'react'
import '../css/ActiveTodo.css'
import { LuPencil } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

function ActiveTodo({ todos }) {
    return (
        <div className='active-todo-outer'>
            <div className='active-todo-heading'>
                <span>Active Todos</span>
            </div>
            <div className='active-todo-body'>
                {
                    todos && todos.map((todo_obj) => {
                        return (
                            <div key={todo_obj.id} className='todo-div'>
                                <div className='todo-text'>
                                    <span>{todo_obj.todo}</span>
                                </div>
                                <div className='icons'>
                                    <span><LuPencil size='13px' /></span>
                                    <span><RxCross2 size='17px' /></span>
                                    <span><FaCheck size='15px' /></span>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}

export default ActiveTodo