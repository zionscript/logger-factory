var fs = require("fs");
var letterMachine = fs.createWriteStream("logger-factory.txt");
letterMachine.write("[INICIO]");
letterMachine.end();