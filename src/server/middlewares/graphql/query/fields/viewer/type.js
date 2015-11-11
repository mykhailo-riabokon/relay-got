/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import regions from './fields/regions';
import families from './fields/families';
import characters from './fields/characters';

export default new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    regions,
    families,
    characters
  })
});
