"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelFile = void 0;
// index.ts
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils");
// this function creates a model
const createModelFile = (model_name, functions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // invoke the directory creation
        (0, utils_1.createDirectoryIfNotExist)('models');
        // invoke the function to the file imports
        const content = (0, utils_1.addFileImports)();
        // create the file
        fs_1.default.writeFile(`${utils_1.basePath}/models/${model_name}.ts`, content, (err) => {
            if (err)
                throw err;
            console.log('File is created successfully.');
        });
        // check we do have an array of functions
        if (functions !== undefined) {
            // iterate over the list of functions
            functions.map((function_name) => {
                // invoke the function to create the model
                const content = (0, utils_1.createModelFunction)(function_name, model_name);
                // append the files content 
                fs_1.default.appendFile(`${utils_1.basePath}/models/${model_name}.ts`, content, function (err) {
                    if (err)
                        throw err;
                    console.log('Functions added successfully.');
                });
            });
        }
    }
    catch (error) {
        console.error("Error occurred while creating the model!", error);
    }
});
exports.createModelFile = createModelFile;
//# sourceMappingURL=index.js.map