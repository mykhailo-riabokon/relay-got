/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLObjectType} from 'graphql';
//import regions from './queries/regions.js';
//import families from './queries/families.js';
//import characters from './queries/characters.js';
import {regionObject} from '../../../types/region.js';

export default {
  type: new GraphQLObjectType(regionObject),
  resolve() {
    return {}
  }
}
