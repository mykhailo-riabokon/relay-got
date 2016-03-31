import { globalIdField } from 'graphql-relay';
import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import { nodeInterface, registerNodeGetters } from './init';
import queries from './queries';

const VIEWER_INSTANCE = { id: '' };
const VIEWER_NAME = 'viewer';
registerNodeGetters(VIEWER_NAME, () => VIEWER_INSTANCE);

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    description: 'The root query for GOT example',
    fields: {
      viewer: {
        type: new GraphQLObjectType({
          name: 'Viewer',
          isTypeOf: (obj) => obj === VIEWER_INSTANCE,
          fields: () => ({
            id: globalIdField(VIEWER_NAME),
            ...queries,
          }),
          interfaces: [nodeInterface],
        }),
        resolve: () => VIEWER_INSTANCE
      }
    },
  })
  // ,
  // mutation: new GraphQLObjectType({
  //   name: 'RootMutation',
  //   description: 'The root mutation type for GOT example',
  //   fields: mutations
  // })
});
