/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';

const familyType = new GraphQLObjectType({
  name: 'Family',
  descriptions: 'Family',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});

export default new GraphQLList(familyType);
