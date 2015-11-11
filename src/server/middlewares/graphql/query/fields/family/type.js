/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLObjectType,
  GraphQLString,
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
    },
    region: {
      type: GraphQLString
    },
    words: {
      type: GraphQLString
    }
  })
});

export default familyType;
