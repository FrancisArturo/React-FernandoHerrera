import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoRedcucer', () => {
    
    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false
    }]

    test('debe regresar el estado inicial', () => {
        

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe agregar un TODO', () => {
        
        const action = {
            type: "[TODO] add Todo",
            payload: {
                id: 2,
                description: "Nuevo TODO #2",
                done:false
            }
        };

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe(2);
        expect( newState ).toContain(action.payload);
    });

    test('debe eliminar un TODO', () => {

        const action = {
            type: "[TODO] add Todo",
            payload: {
                id: 2,
                description: "Nuevo TODO #2",
                done:false
            }
        };

        const newState = todoReducer( initialState, action);
        
        const action2 = {
            type: "[TODO] Remove Todo",
            payload: 1
        };

        const newState2 = todoReducer( newState, action2);
        expect( newState2.length ).toBe(1);

    });

    test('debe cambiar el "done" del TODO', () => {
        const action = {
            type: "[TODO] Toggle Todo",
            payload: 1
        };

        const newState = todoReducer( initialState, action);
        expect( newState[0].done ).toBe(true);

        const newState2 = todoReducer( newState, action);
        expect( newState2[0].done ).toBe(false);

    });

});