/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import members from './fields/members';

const familyType = new GraphQLObjectType({
  name: 'Family',
  descriptions: 'Family',
  fields: () => ({
    name: {
      type: GraphQLString
    }
    //,
    //members
  })
});

export default new GraphQLList(familyType);