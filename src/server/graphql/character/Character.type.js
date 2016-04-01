import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';
import { globalIdField } from 'graphql-relay';

export default new GraphQLObjectType({
  name: 'Character',
  description: 'Character from GOT world',
  fields: () => ({
    id: globalIdField('Character'),
    name: {
      type: GraphQLString,
    },
    isDead: {
      type: GraphQLBoolean,
    },
    title: {
      type: GraphQLString,
    },
    photo: {
      type: GraphQLString,
    },
  }),
});
