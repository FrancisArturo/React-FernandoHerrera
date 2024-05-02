import { getHeroeById, getHeroesByOwner } from "../../src/BasePruebas/arreglo2";
import heroes from "../../src/data/heroes";


describe('pruebas en arreglo2', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const hid = 1;
        const heroe = getHeroeById(hid);
        
        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });
    test('getHeroeById debe retornar undefined si no existe el id', () => {
        const hid = 100;
        const heroe = getHeroeById(hid);
        
        expect(heroe).toBeFalsy();
    });
    test('getHeroesByOwner debe retornar los heroes de dc', () => {
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        // const heroesExpected = [
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ]
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter ( (heroe) => heroe.owner === owner));
    });
    test('getHeroesByOwner debe retornar los heroes de marvel', () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});