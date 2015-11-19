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
    regionId: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    words: {
      type: GraphQLString
    },
    coatOfArms: {
      type: GraphQLString
    }
  })
});

export default familyType;
