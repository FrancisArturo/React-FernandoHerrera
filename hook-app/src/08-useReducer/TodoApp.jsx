import React from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../Hooks/useTodos'


export const TodoApp = () => {

    const { todos, handleOnNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodos();

  return (
    <>
        <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList  todos={[todos]} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>    
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleOnNewTodo}/>
                </div>
            </div>
    </>
  )
}

