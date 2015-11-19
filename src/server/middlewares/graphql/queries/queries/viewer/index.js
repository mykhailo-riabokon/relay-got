/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import regions from './queries/regions.js';
import families from './queries/families.js';
import characters from './queries/characters.js';

export default {
  type: new GraphQLObjectType({
    name: 'Viewer',
    fields: () => ({
      regions,
      families,
      characters
    })
  }),
  resolve() {
    return {}
  }
}
