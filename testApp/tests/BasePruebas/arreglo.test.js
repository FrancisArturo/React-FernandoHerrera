import { retornoArreglo } from "../../src/BasePruebas/arreglo";

describe('pruebas en arreglo', () => {
    test('debe retornar un string y un numero', () => {
        const [letters, numbers] = retornoArreglo();
        expect(letters).toBe("ABC");
        expect(numbers).toBe(123);

        expect(typeof letters).toBe("string");
        expect(typeof numbers).toBe("number"); 
        
        expect(letters).toEqual(expect.any(String));
    });
});