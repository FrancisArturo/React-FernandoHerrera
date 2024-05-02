import { fireEvent, render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";



describe('pruebas en el componente MainApp', () => {
    
    test('debe mostrar el HomePage', () => {
        
        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        );
        
        //screen.debug()
    });

    test('debe mostrar el loginPage', () => {
        
        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        );

        const anchorLabel = screen.getByLabelText("loginLink");

        expect(anchorLabel.className).toContain("active");
    });
});