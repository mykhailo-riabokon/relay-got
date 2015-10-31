/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';
import regions from './fields/regions';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: {
      regions: regions
    }
  })
});