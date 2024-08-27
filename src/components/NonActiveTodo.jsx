import React from 'react'
import '../css/NonActiveTodo.css'

function NonActiveTodo() {
    return (
        <div className='non-active-todo-outer'>
            <div className='non-active-todo-heading'>
                <span>Heading</span>
            </div>
            <div className='non-active-todo-body'>
                <div className='todo-div'>
                    <div className='todo-text'>
                        <span>learn javascript</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NonActiveTodo