/**
 * Created by mikhail on 31.10.15.
 */
import graphql from 'express-graphql';
import schema from './schema.js';

const graphqlMiddleware = graphql({
  schema: schema,
  graphiql: true
});

export default graphqlMiddleware;