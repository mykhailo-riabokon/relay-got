/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import viewer from './fields/viewer';
import family from './fields/family';

export default new GraphQLObjectType({
  name: 'Root',
  description: 'The root query for GOT example',
  fields: {
    viewer,
    family
  }
})
