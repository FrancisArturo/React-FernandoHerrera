import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('pruebas en TodoItem', () => {
    
    const todo = {
        id: 1,
        description: "Piedra del alma",
        done: false
    };

    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );


    test('debe mostrar el TODO pendiente', () => {

        render(<TodoItem id={todo.id} description={todo.description} done={todo.done} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole("listitem");
        const spanElement =  screen.getByLabelText("span");
        
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('debe mostrar el TODO realizado', () => {
        
        todo.done = true;

        render(<TodoItem id={todo.id} description={todo.description} done={todo.done} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const spanElement =  screen.getByLabelText("span");
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span debe llamar onToggleTodo cuando se hace "click"', () => {
        
        render(<TodoItem id={todo.id} description={todo.description} done={todo.done} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const spanElement =  screen.getByLabelText("span");

        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('button debe llamar a onDeleteTodo', () => {
        
        render(<TodoItem id={todo.id} description={todo.description} done={todo.done} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const buttonDeleteElement = screen.getByRole("button", {name: "Borrar"});

        fireEvent.click(buttonDeleteElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        
    });
});