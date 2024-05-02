import { getUser, getUsuarioActivo } from "../../src/BasePruebas/funciones";

describe('pruebas en  funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: "abgfd",
            usermame: "ASD"
        }
        const user = getUser();

        expect(testUser).toEqual(user);
    });
    test('getUsuarioActivo debe devolver un objeto', () => {
        const nameUser = "francis";
        const testUserActive = {
            uid: "adbcv",
            username: nameUser
        };
        const user = getUsuarioActivo(nameUser);
        expect(testUserActive).toEqual(user);
    });
});