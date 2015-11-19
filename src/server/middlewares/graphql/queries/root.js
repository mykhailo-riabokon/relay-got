/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import {nodeField} from '../graphqlRelay.js';
import regions from './queries/regions';
import families from './queries/families';
import characters from './queries/characters';

export default new GraphQLObjectType({
  name: 'Root',
  description: 'The root query for GOT example',
  fields: {
    node: nodeField,
    regions,
    families,
    characters
  }
})
