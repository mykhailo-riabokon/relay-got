import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'Family',
  description: 'Family',
  fields: () => ({
    id: globalIdField('Family'),
    name: {
      type: GraphQLString,
    },
    words: {
      type: GraphQLString,
    },
    coatOfArms: {
      type: GraphQLString,
    },
  }),
});
