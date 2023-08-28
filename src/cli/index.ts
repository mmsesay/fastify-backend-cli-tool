// index.ts
import fs from "fs";
import { basePath, createDirectoryIfNotExist, addFileImports, createModelFunction } from "../utils";

// this function creates a model
const createModelFile = async (model_name: string, functions: Array<string>) => {
  try {
    // invoke the directory creation
    createDirectoryIfNotExist('models');

    // invoke the function to the file imports
    const content = addFileImports();

    // create the file
    fs.writeFile(`${basePath}/models/${model_name}.ts`, content, (err) => {
      if (err) throw err;
      console.log('File is created successfully.');
    });

    // check we do have an array of functions
    if (functions !== undefined) {

      // iterate over the list of functions
      functions.map((function_name) => {
        // invoke the function to create the model
        const content = createModelFunction(function_name, model_name)

        // append the files content 
        fs.appendFile(`${basePath}/models/${model_name}.ts`, content, function (err) {
          if (err) throw err;
          console.log('Functions added successfully.');
        });
      })
    }

  } catch (error) {
    console.error("Error occurred while creating the model!", error);
  }
}

export { createModelFile };