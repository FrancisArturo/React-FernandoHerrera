import React from 'react'

export const TodoItem = ({id, description, done, onDeleteTodo, onToggleTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <span 
                className={`align-self-center ${(done)? "text-decoration-line-through":""}`} 
                onClick={() => onToggleTodo(id)}
                aria-label='span'
                >
                    {description}
                </span>
            <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>Borrar</button>
        </li>
    )
}

