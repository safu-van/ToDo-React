import React from 'react'
import '../css/NonActiveTodo.css'

function NonActiveTodo({ heading, todos }) {
    return (
        <div className='non-active-todo-outer'>
            <div className='non-active-todo-heading'>
                <span>{heading}</span>
            </div>
            <div className='non-active-todo-body'>
                {
                    todos && todos.map((todo_obj) => {
                        return (
                            <div key={todo_obj.id} className='todo-div'>
                                <div className='todo-text'>
                                    <span>{todo_obj.todo}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NonActiveTodo