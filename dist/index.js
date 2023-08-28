#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
// custom commands imports
const commands_1 = require("./commands");
console.log(figlet_1.default.textSync("Backend CLI"));
//add the following line
const program = new commander_1.Command();
program
    .name("backend")
    .version("0.0.1")
    .description("A CLI tool for creating code snippets")
    .usage("<command> [global options]");
// commands
program.addCommand((0, commands_1.generateCommand)());
// args
program.parse(process.argv);
//# sourceMappingURL=index.js.map