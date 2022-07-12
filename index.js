const jsonFile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const random = require("random")
const FILE_PATH = "./data.json";
const makeCommit = n => {
    const DATE = moment().format();

    const data = {
        date: DATE
    }

    jsonFile.writeFile(FILE_PATH, data);

    simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();

}


makeCommit(100);