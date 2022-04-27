// clase que vamos a realizar pruebas
const reader = require('../../fizzbuzz/lib/utils/reader')

// pruebas para verificar la lectura de archivos
describe("pruebas para reader.js", () => {
    // Prueba de caso 1
    test('Case1: lectura de archivos', () => {
        // codigo que se desea proba
        const fileReader = reader.readFile("explorers.json")
            //console.log(fileReader)

        // Resultado que se espera de las pruebas Ajolonauta1
        expect(fileReader[0].name).toBe("Woopa1");
        expect(fileReader[0].githubUsername).toBe("ajolonauta1");
        expect(fileReader[0].score).toBe(1);
        // ajolonauta 15
        expect(fileReader[14].name).toBe("Woopa15");
        expect(fileReader[14].githubUsername).toBe("ajolonauta15");
        expect(fileReader[14].score).toBe(15);
    });
})