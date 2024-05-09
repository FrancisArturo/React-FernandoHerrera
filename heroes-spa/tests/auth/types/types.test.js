import { types } from "../../../src/auth/types/types";


describe('pruebas en types.js', () => {
    
    test('debe regresar los types', () => {
        
        expect(types).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",
        })
    });
});