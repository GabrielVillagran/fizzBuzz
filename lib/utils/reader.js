// fs is a module of JS that provides a lot of very useful functionality to access and interact with the file system.
const fs = require("fs");

class reader {
    // Part 1 Read json file
    static readFile(pathFile) {
        const rawdata = fs.readFileSync(pathFile); //read the file explorers.json (database)
        return JSON.parse(rawdata); //print the data that is on rawdata
    }
}
module.exports = reader;