"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path_1 = __importDefault(require("./path"));
const createDirectoryIfNotExist = (name) => {
    // create new directory
    try {
        // check if directory already exists
        if (!fs.existsSync(`${path_1.default}/${name}`)) {
            fs.mkdirSync(`${path_1.default}/${name}`);
            console.log("Directory is created.");
        }
        else {
            console.log("Directory already exists.");
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = createDirectoryIfNotExist;
//# sourceMappingURL=dir.js.map