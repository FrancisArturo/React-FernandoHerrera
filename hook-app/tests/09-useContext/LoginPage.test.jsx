import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/userContext";


describe('pruebas en el componente LoginPage', () => {

    const setUserMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() );

    
    test('debe mostrar el componente sin el usuario', () => {
        
        render(
        <UserContext.Provider value={{ user: null}} >
                <LoginPage />
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("preLogin"); 
        expect(preTag.innerHTML).toBe("null");

    });

    test('debe llamar el "setUser" cuando se hace click en el botón', () => {

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock}} >
                    <LoginPage />
            </UserContext.Provider>
        );

        const userButton = screen.getByRole("button", {name: "Establecer Usuario"});

        fireEvent.click(userButton);

        expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: "juan", email: "juan@gmail.com"});

    });
});