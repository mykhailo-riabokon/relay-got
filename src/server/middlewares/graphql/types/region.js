/**
 * Created by mikhail on 19.11.15.
 */
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

const regionType = new GraphQLObjectType({
  name: 'Region',
  descriptions: 'Regions of Seven Kingdoms',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the object.',
    },
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

export default regionType;
