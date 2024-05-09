import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en el componente PublicRoute', () => {
    
    test('debe mostrar el children si el usuario no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider  value={contextValue}>
                <PublicRoute >
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText("Ruta Pública")).toBeTruthy()
    });

    test('debe navegar si el usuario esta autenticado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name: "John Doe",
                id: "ABC"
            }
        }

        render(
            <AuthContext.Provider  value={contextValue}>
                <MemoryRouter  initialEntries={["/login"]}>

                    <Routes >

                        <Route path="login" element={
                            <PublicRoute >
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={ <h1>Página Marvel</h1> }/>

                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText("Página Marvel")).toBeTruthy()
    });
});