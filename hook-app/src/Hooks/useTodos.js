import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";



const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodos = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    const handleOnNewTodo = (todo) =>{
        const action = {
            type: "[TODO] add Todo",
            payload: todo,
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    }
 

    return {
        todos,
        handleOnNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}