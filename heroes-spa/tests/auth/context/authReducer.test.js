import { AuthReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";



describe('pruebas en authReducer.js', () => {

    const initialState = {
        logged: false,
    }

    
    test('debe devolver el state por defecto ', () => {
        
        const newState = AuthReducer(initialState, {});
        
        expect(newState).toBe(newState);

    });

    test('(login) debe llamar al login, autenticar y establecer el user ', () => {
        
        const user = { id: "ABC", name: "John Doe" };

        const LoginAction = { 
            types: types.login, 
            payload: user 
        }

        const newState = AuthReducer(initialState, LoginAction);

        expect(newState.user).toBe(LoginAction.payload);
        expect(newState.logged).toBeTruthy();

    });
    
    test('(logout) debe llamar al logout y borrar el user ', () => {
        
        const user = { id: "ABC", name: "John Doe" };

        const LoginAction = { 
            types: types.login, 
            payload: user 
        }

        const newState = AuthReducer(initialState, LoginAction);

        const logoutAction = {
            types: types.logout,
        }

        const newState2 = AuthReducer(newState, logoutAction);

        expect(newState2.user).toBe(undefined);
        expect(newState2.logged).toBeFalsy();

    });
});