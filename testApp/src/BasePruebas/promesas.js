import { getHeroeById } from "./arreglo2";


const getHeroesByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject("No se puede encontrar el heroe " + id);
            }
        }, 1000);
    })
}

export default getHeroesByIdAsync