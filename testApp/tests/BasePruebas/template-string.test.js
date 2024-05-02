import { getSaludo } from "../../src/BasePruebas/template-string";

describe("template string pruebas", () => {
    test("get saludo debe retornar 'hola francis'", () => {
        const name = "francis";
        const message = getSaludo(name);

        expect(message).toBe(`hola ${name}`)
    }) 

})