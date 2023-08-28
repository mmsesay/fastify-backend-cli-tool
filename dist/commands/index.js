"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCommand = void 0;
const commander_1 = require("commander");
const cli_1 = require("../cli");
const generateCommand = () => {
    const commander = new commander_1.Command("generate")
        .description("Generates some files")
        .usage("model <model_name> [functions...]")
        .option("-m, model <name>", "Create a model");
    commander
        .command("model")
        .description("To create a model, proivde a model name. Function names are optional")
        .arguments("<name> [functions...]")
        .action((name, functions) => {
        console.log("funcs:: ", functions);
        console.log('creating the model', name);
        //  invoke the create model file function
        (0, cli_1.createModelFile)(name, functions);
    });
    return commander;
};
exports.generateCommand = generateCommand;
//# sourceMappingURL=index.js.map