"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelFunction = exports.addFileImports = exports.createDirectoryIfNotExist = exports.basePath = void 0;
const path_1 = __importDefault(require("./path"));
exports.basePath = path_1.default;
const dir_1 = __importDefault(require("./dir"));
exports.createDirectoryIfNotExist = dir_1.default;
const snippets_1 = require("./snippets");
Object.defineProperty(exports, "addFileImports", { enumerable: true, get: function () { return snippets_1.addFileImports; } });
Object.defineProperty(exports, "createModelFunction", { enumerable: true, get: function () { return snippets_1.createModelFunction; } });
//# sourceMappingURL=index.js.map