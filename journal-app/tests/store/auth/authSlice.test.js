import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";


describe('pruebas en authSlice.js', () => {
    
    test('debe regresar el estado inicial y llamarse auth', () => {
        
        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);

        expect(authSlice.name).toBe("auth");
    });

    test('debe realizar la autenticacion', () => {
        
        const newState = authSlice.reducer(initialState, login(demoUser));

        expect(newState).toEqual({
            status: "authenticated",
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null, 
        });
    });

    test('debe realizar el logout sin argumentos', () => {
        
        const newState = authSlice.reducer(authenticatedState, logout());

        expect(newState).toEqual({
            status: "not-authenticated",
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined 
        });
    });

    test('debe realizar el logout con un mensaje de error', () => {
        
        const errorMessage = "las credenciales no son correctas"
        const newState = authSlice.reducer(authenticatedState, logout({errorMessage}));

        expect(newState).toEqual({
            status: "not-authenticated",
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage 
        });
    });

    test('debe cambiar el estado a "checking"', () => {
        
        const newState = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(newState.status).toBe("checking");
    });
});