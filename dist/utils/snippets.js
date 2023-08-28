"use strict";
// snippets
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelFunction = exports.addFileImports = void 0;
const addFileImports = () => {
    return `import { FastifyInstance } from 'fastify'
`;
};
exports.addFileImports = addFileImports;
const createModelFunction = (function_name, model_name) => {
    return `
export async function ${function_name}Query(server: FastifyInstance) {
  const query = '';
  const queryValues = []
  const result = server.pg.query(query, queryValues);
  return result.rows as ${model_name}[]
}
  `;
};
exports.createModelFunction = createModelFunction;
//# sourceMappingURL=snippets.js.map