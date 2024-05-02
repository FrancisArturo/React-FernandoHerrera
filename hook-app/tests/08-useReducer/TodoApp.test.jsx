import { fireEvent, render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/Hooks/useTodos";


jest.mock("../../src/Hooks/useTodos");

describe('pruebas en TodoApp', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: "todo #1",
                done: false
            },
            {
                id: 2,
                description: "todo #2",
                done: false
            }
        ],
        handleOnNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1,
    })
    
    test('debe mostrar el componente correctamente ', () => {
        
        render(<TodoApp />)

        expect(screen.getByText("todo #1")).toBeTruthy();
        expect(screen.getByText("todo #2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});