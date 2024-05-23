import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodosApp = () => {

  // const { data: todos = [], isLoading} = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading} = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }
  const prevTodo = () => {
    setTodoId(todoId - 1)
  }

  return (
    <>
        <h1>Todos - RTK query</h1>
        <hr />

        <h4>Is loading: {isLoading? "True" : "false"}</h4>


        <pre>{JSON.stringify(todo)}</pre>


        {/* <ul>
          {
            todos.map( todo => (
              <li key={todo.id}>
                <strong>{todo.completed? "Done" : "Pending"}   </strong>
                {todo.title}
              </li>
            ))
          }
        </ul> */}
        <button onClick={nextTodo}>
            Next Todo
        </button>
        <button onClick={prevTodo}>
            Previous Todo
        </button>
    </>
  )
}
