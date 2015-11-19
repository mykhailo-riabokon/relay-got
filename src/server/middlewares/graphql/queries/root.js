/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import viewer from './queries/viewer';
//import family from './queries/family';

export default new GraphQLObjectType({
  name: 'Root',
  description: 'The root query for GOT example',
  fields: {
    viewer
    //,
    //family
  }
})
