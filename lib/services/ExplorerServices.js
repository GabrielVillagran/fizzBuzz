// fs is a module of JS that provides a lot of very useful functionality to access and interact with the file system.
const fs = require("fs");

class explorerServices {
    // filtrar explorers por misiones
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission
    }

    // obtener cantidad de explorers por mision
    static getAmountOfExplorersByMission(explorers, mission) {
        //Get the quantity of explorers in mission node or mission java
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission.length
    }

    // obtener usernames de explorers por mision
    static getExplorersUsernamesByMission(explorers, mission) {
        // Get the explorer's usernames in Node
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInMission = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInMission
    }
}
module.exports = explorerServices;