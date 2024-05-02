import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/Hooks/useForm";
import { act } from "react-dom/test-utils";

describe('pruebas en useForm', () => {

    const initialForm = {
        name: "john",
        email: "john@gmail.com",
    }
    
    test('debe regresar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        })
    });
    test('debe cambiar el nombre del formulario', () => {
            
        const newValue = "juan";
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;

        act ( () => {
            onInputChange({target: {name: "name", value: newValue}});
        })  

        expect(result.current.name).toBe(newValue);
        expect( result.current.formState.name ).toBe(newValue);
    });
    test('debe resetear el formulario', () => {
            
        const newValue = "juan";
        const { result } = renderHook( () => useForm(initialForm));
        const { onResetForm, onInputChange } = result.current;

        act ( () => {
            onInputChange({target: {name: "name", value: newValue}});
            onResetForm();
        })  

        expect(result.current.name).toBe(initialForm.name);
        expect( result.current.formState.name ).toBe(initialForm.name);
    });
});