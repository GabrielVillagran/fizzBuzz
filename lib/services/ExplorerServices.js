// fs is a module of JS that provides a lot of very useful functionality to access and interact with the file system.
const fs = require("fs");

class explorerServices {
    // filtrar explorers por misiones
    static filterByMission(explorers, mission) {
        //Get the quantity of explorers names in node and java
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission.length
    }

    // obtener cantidad de explorers por mision
    // static getAmountOfExplorersByMission(explorers, mission) {}

    // obtener usernames de explorers por mision
    // static getExplorersUsernamesByMission(explorers, mission) {}
}
module.exports = explorerServices;