import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import * as queries from './queries';
import * as mutations from './mutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    description: 'The root query for GOT example',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    description: 'The root mutation type for GOT example',
    fields: mutations
  })
});
