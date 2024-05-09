import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";


const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}));


describe('pruebas en el componente Search', () => {

    beforeEach( () => jest.clearAllMocks() );
    
    test('debe mostrar correctamente los valores por defecto', () => {
        const { container } = render(
                <MemoryRouter>
                    <Search />
                </MemoryRouter>
            
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar a batman y el input con el valor de querystring', () => {
        
        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <Search />
            </MemoryRouter>
        
        );

        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman");

        const img = screen.getByRole("img");
        expect(img.src).toBe("http://localhost/assets/heroes/dc-batman.jpg");

        const divSearch = screen.getByLabelText("searchHeroDiv");
        expect(divSearch.style.display).toBe("none");

    });

    test('debe mostrar un error si no encuentra el heroe ("batman123")', () => {
        
        render(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <Search />
            </MemoryRouter>
        
        );

        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman123");

        const errorSearchAlert = screen.getByLabelText("searchHeroError");
        expect(errorSearchAlert.style).not.toContain("display");
    });

    test('debe llamar el navigate a la nueva pagina', () => {
        
        render(
            <MemoryRouter initialEntries={["/search"]}>
                <Search />
            </MemoryRouter>
        
        );

        const input = screen.getByRole("textbox");
        fireEvent.change(input, {target: {value: 'superman'}})

        const formHero = screen.getByLabelText("heroForm");
        fireEvent.submit(formHero);
        
        expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");
    });
});