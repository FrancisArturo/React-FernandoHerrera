import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/Hooks/useFetch";
import { useCounter } from "../../src/Hooks/useCounter";
import PokemonCard from "../../src/03-examples/PokemonCard";



jest.mock("../../src/Hooks/useFetch");
jest.mock("../../src/Hooks/useCounter");

describe('pruebas en <MultipleCustomHooks />', () => {
    

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({data: null, isLoading: true, hasError: null});

        render(<MultipleCustomHooks />);

        expect( screen.getByText("Loading..."));
        expect( screen.getByText("Pokémon hook"));


        const nextButton = screen.getByRole("button", {name: "Siguiente"});
        const previousButton = screen.getByRole("button", {name: "Anterior"});

        expect(nextButton.disabled).toBeFalsy();
        expect(previousButton.disabled).toBeFalsy();
        
    });

    test('debe mostrar un pokemon', () => {
        
        const data = { name: "bulbasaur", id: "1" };
        useFetch.mockReturnValue({data: [{ name: "bulbasaur", id: "1" }], isLoading: false, hasError: null});
        
        // render(<MultipleCustomHooks />);
        render(<PokemonCard name = {data.name} 
            id = {data.id}/>);


        expect( screen.getByText(data.name)).toBeTruthy();
    });

    test('debe llamar la funcion incrementar', () => {
        // const data = { name: "bulbasaur", id: "1" };
        // useFetch.mockReturnValue({data: [{ name: "bulbasaur", id: "1" }], isLoading: false, hasError: null});

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole("button", {name: "Siguiente"});

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });
});