import graphql from 'express-graphql';
import schema from '../graphql/schema.js';

export default graphql({
  schema: schema,
  graphiql: true
});
