import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {
            todos[0].map( todo => (
                <TodoItem key={todo.id}  id={todo.id} description={todo.description} done={todo.done} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
            ))
        }
    </ul>
  )
}

