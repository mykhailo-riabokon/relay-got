import graphql from 'express-graphql';
import schema from '../graphql/schema.js';
import * as services from '../services';

export default graphql({
  schema,
  graphiql: true,
  rootValue: {
    ...services,
  }
});
