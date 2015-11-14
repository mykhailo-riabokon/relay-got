/**
 * Created by mikhail on 03.11.15.
 */
import fs from 'fs';
import path from 'path';
import schema from '../src/server/middlewares/graphql/schema.js';
import {graphql} from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';

let graphQlPath = path.join(__dirname, '../src/server/middlewares/graphql');

console.log('Start update schema');
async () => {
  let result = await (graphql(schema, introspectionQuery));

  if (result.errors) {
    console.log(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(graphQlPath, 'schema.json'),
      JSON.stringify(result, null, 2)
    );
  }
}();

// Save user readable type system shorthand of schema
fs.writeFileSync(
  path.join(graphQlPath, 'schema.graphql'),
  printSchema(schema)
);

console.log('Schema was updated');
