import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";



const user = {
    name: "John Doe",
    id: "ABC"
}

const logoutMock = jest.fn();
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}));

describe('pruebas en el componente Navbar', () => {

    beforeEach( () => jest.clearAllMocks() );

    
    test('debe mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={{user}}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
            
        )

        expect(screen.getAllByText(user.name)).toBeTruthy();
    });

    test('debe llamar el logout() y navigate cuando se hace click en el botón', () => {
        
        render(
            <AuthContext.Provider value={{user, logout: logoutMock}}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
            
        );

        const logoutButton = screen.getByRole("button", {name: "Logout"});
        fireEvent.click(logoutButton);

        expect(logoutMock).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {replace: true}); 
    });
});