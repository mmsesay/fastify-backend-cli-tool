import { Command } from 'commander';
import { createModelFile } from '../cli';

export const generateCommand = () => {
  const commander = new Command("generate")
    .description("Generates some files")
    .usage("model <model_name> [functions...]")
    .option("-m, model <name>", "Create a model");

  commander
    .command("model")
    .description("To create a model, proivde a model name. Function names are optional")
    .arguments("<name> [functions...]")
    .action((name: string, functions: any) => {
      console.log("funcs:: ", functions);
      
      console.log('creating the model', name);
      //  invoke the create model file function
      createModelFile(name, functions);
    });

  return commander;
}