// clase que vamos a realizar pruebas
const reader = require('../../fizzbuzz/lib/utils/reader')
const explorersService = require('../lib/services/ExplorerServices')

// pruebas para verificar la lectura de archivos
describe("pruebas para ExplorerServices.js", () => {
    // Prueba de caso 1
    test('Case1: filterByMission node', () => {
        // codigo que se desea probar
        const explorers = reader.readFile("explorers.json")

        // Resultado que se espera de las pruebas Ajolonauta1
        expect(explorersService.filterByMission(explorers, "node").length).toBe(10); //se detecta que la longitud de los explorers sea la cantidad de explorers con esa mision
    });
    // Prueba de caso 2
    test('Case2: getAmountOfExplorersByMission java', () => {
        // codigo que se desea probar
        const explorers = reader.readFile("explorers.json")

        // Resultado que se espera de las pruebas Ajolonauta1
        expect(explorersService.getAmountOfExplorersByMission(explorers, "java")).toBe(5);
    });
    // Prueba de caso 3
    test('Case3: getExplorersUsernamesByMission', () => {
        // codigo que se desea probar
        const explorers = reader.readFile("explorers.json")

        // Resultado que se espera de las pruebas Ajolonauta1
        expect(explorersService.getExplorersUsernamesByMission(explorers, "node")).toHaveProperty('ajolonauta1, ajolonauta2, ajolonauta3, ajolonauta4, ajolonauta5, ajolonauta11, ajolonauta12, ajolonauta13, ajolonauta14, ajolonauta15');
    });
})