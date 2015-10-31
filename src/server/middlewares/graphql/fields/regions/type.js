/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

const regionType = new GraphQLObjectType({
  name: 'Region',
  descriptions: 'Regions of Seven Kingdoms',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    rulers: {
      type: GraphQLString
    },
    capital: {
      type: GraphQLString
    },
    religion: {
      type: GraphQLString
    },
    bastardSurname: {
      type: GraphQLString
    }
  })
});

export default new GraphQLList(regionType);