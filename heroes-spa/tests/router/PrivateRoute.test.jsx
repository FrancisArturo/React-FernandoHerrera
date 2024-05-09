import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";



describe('pruebas en el componente PrivateRoute', () => {
    

    test('debe mostrar el children si el usuario esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        
        const contextValue = {
            logged: true,
            user: {
                name: "john doe",
                id: "ABC"
            }
        }

        render(
            <AuthContext.Provider  value={contextValue}>

                <MemoryRouter initialEntries={["/search?q=batman"]}>

                    <PrivateRoute >
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>

                </MemoryRouter>
                
            </AuthContext.Provider>
        )

        expect( screen.getByText("Ruta Privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
    });
});