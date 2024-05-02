import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";
import { act } from "react-dom/test-utils";



describe('pruebas en el useCounter', () => {
    test('debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter).toBe(10);
        expect(decrement).toEqual( expect.any(Function));
        expect(increment).toEqual( expect.any(Function));
        expect(reset).toEqual( expect.any(Function));
    });
    test('debe retornar el counter con valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter).toBe(100);
    });
    test('debe inrementar el valor del counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2)
        });

        expect( result.current.counter ).toBe(103);
    });
    test('debe decrementar el valor del counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2)
        });

        expect( result.current.counter ).toBe(97);
    });
    test('debe resetear el valor del counter al valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, reset } = result.current;

        act( () => {
            increment(2);
            increment(5);
            reset();
        });

        expect( result.current.counter ).toBe(10);
    });
});