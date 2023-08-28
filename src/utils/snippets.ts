// snippets

const addFileImports = () => {
  return `import { FastifyInstance } from 'fastify'
`
};

const createModelFunction = (function_name: string, model_name: string) => {
  return `
export async function ${function_name}Query(server: FastifyInstance) {
  const query = '';
  const queryValues = []
  const result = server.pg.query(query, queryValues);
  return result.rows as ${model_name}[]
}
  `
};

export { addFileImports, createModelFunction };