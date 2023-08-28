#!/usr/bin/env node
import { Command } from 'commander';
import figlet from "figlet";

// custom commands imports
import { generateCommand } from './commands';

console.log(figlet.textSync("Backend CLI"));

//add the following line
const program = new Command();

program
  .name("backend")
  .version("0.0.1")
  .description("A CLI tool for creating code snippets")
  .usage("<command> [global options]")
  
// commands
program.addCommand(generateCommand());

// args
program.parse(process.argv);
