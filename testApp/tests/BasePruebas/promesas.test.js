import getHeroesByIdAsync from "../../src/BasePruebas/promesas";

describe('test en pruebas', () => {
    test('getHeroesByIdAsync debe retornar un heroe', (done) => {
        const id =  1;
        getHeroesByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done();
            })
    });
    test('getHeroesByIdAsync debe retornar un error si el id no existe', (done) => {
        const id =  100;
        getHeroesByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy();
            })
            .catch(error => {
                expect(error).toBe("No se puede encontrar el heroe 100")
                done();
            })
    });
});