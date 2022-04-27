// clase que vamos a realizar pruebas
const reader = require("../fizzbuzz/lib/utils/reader")

// pruebas para verificar la lectura de archivos
describe("pruebas para reader.js", () => {
    // Prueba de caso 1
    test('Case1: lectura de archivos', () => {
        // codigo que se desea proba
        const file = reader.readFile("explorers.json")

        // Resultado que se espera de las pruebas
        expect(file.name).toBe("woopa1");
        expect(file.githubUsername).toBe("ajolonauta1");
        // expect(user.name).toBe("Gabriel");
        // expect(user.bio).not.toBeUndefined();
    });
})