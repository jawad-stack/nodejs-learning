const fs = require("fs");

const readFile = fs.readFileSync("./06-Running-Our-First-Nodejs-Code/file.txt");

console.log(readFile.toString());

console.log("End of Running");