/* eslint no-console: 0 */

import fs from 'fs';
import path from 'path';
import schema from '../graphql/schema';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

const graphQlPath = path.join(__dirname, '../graphql');

console.log('Start update schema');

const getSchema = async () => {
  const result = await graphql(schema, introspectionQuery);

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

  process.exit();
};

// Save user readable type system shorthand of schema
fs.writeFileSync(
  path.join(graphQlPath, 'schema.graphql'),
  printSchema(schema)
);
getSchema();

console.log('Schema was updated');
