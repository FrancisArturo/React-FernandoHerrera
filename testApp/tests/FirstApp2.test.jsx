import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/firstApp";


describe('testFirstApp', () => {

    const title = "Arturo";
    const subTitle = "Soy un Subtitulo";


    test('debe hacer match con el snapshot', () => {
        const { container} = render(<FirstApp title={title}/> );
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar el titulo enviado por props', () => {
        render(<FirstApp title = {title}/> );
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug()
    });
    test('debe mostrar el titulo en un h1', () => {
        render(<FirstApp title = {title}/> );
        expect(screen.getByRole("heading", {level: 1}).innerHTML).toContain(title);
        //screen.debug()
    });
    test('debe mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp 
                title = {title}
                subTitle = {subTitle}
            /> 
        );
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});