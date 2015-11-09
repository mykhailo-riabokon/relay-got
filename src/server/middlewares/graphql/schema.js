/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';
import regions from './fields/regions';
import families from './fields/families';
import characters from './fields/characters';

let viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    regions,
    families,
    characters
  })
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    description: 'The root query for GOT example',
    fields: {
      viewer: {
        type: viewerType,
        resolve() {
          return {};
        }
      }
    }
  })
});
