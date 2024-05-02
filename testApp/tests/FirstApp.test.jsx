import { render } from "@testing-library/react"
import { FirstApp } from "../src/firstApp";


describe('testFirstApp', () => {
    // test('debe hacer match con el snapshot', () => {
    //     const { container} = render(<FirstApp /> );
    //     // expect(container).toMatchSnapshot();
    // });
    test('debe mostrar el titulo enviado por props', () => {
        const title = "Arturo";
        const { getByText, getByTestId } = render(<FirstApp title = {title}/> );
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId("test-title").innerHTML).toContain(title);
    });
    test('debe mostrar el subtitulo enviado por props', () => {
        const subTitle = "Soy un Subtitulo";
        const { getByText, getByTestId } = render(<FirstApp subTitle = {subTitle}/> );
        expect(getByText(subTitle)).toBeTruthy();
        //expect(getByTestId("test-title").innerHTML).toContain(subTitle);
    });
});