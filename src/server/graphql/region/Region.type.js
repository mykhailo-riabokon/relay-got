import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'Region',
  descriptions: 'Regions of Seven Kingdoms',
  fields: () => ({
    id: globalIdField('Region'),
    name: {
      type: GraphQLString,
    },
    rulers: {
      type: GraphQLString,
    },
    capital: {
      type: GraphQLString,
    },
    religion: {
      type: GraphQLString,
    },
    bastardSurname: {
      type: GraphQLString,
    },
  }),
});
