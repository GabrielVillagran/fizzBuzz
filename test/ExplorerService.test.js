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
        expect(explorersService.filterByMission(explorers, "node")).toBe(10);
    });
    // Prueba de caso 2
    test('Case2: filterByMission java', () => {
        // codigo que se desea probar
        const explorers = reader.readFile("explorers.json")

        // Resultado que se espera de las pruebas Ajolonauta1
        expect(explorersService.filterByMission(explorers, "java")).toBe(5);
    });
})