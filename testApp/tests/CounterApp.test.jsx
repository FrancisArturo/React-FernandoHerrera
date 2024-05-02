import { fireEvent, getByText, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp";


describe('test sobre counterApp.jsx', () => {
    
    const value = 100;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value}/>);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole("heading", {level: 2}).innerHTML).toContain("100");
    });

    test('el boton +1 debe incerementar el valor en 1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText("+1"));
        expect(screen.getByText("101")).toBeTruthy();
    });
    test('el boton -1 debe decrementar el valor en 1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText("-1"));
        //screen.debug()
        expect(screen.getByText("99")).toBeTruthy();
    });
    test('el boton reset debe resetear al valor inicial', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1")); 
        fireEvent.click(screen.getByText("-1"));
        //fireEvent.click(screen.getByText("Reset"));
        fireEvent.click(screen.getByRole("button", {name: "btn-reset"}));

        expect(screen.getByText(value)).toBeTruthy();
    });
});