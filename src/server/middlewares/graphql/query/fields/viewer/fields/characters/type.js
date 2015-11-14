/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLList,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

const characterType = new GraphQLObjectType({
  name: 'Character',
  description: 'character from GOT',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    familyId: {
      type: GraphQLID
    },
    regionId: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    isDead: {
      type: GraphQLBoolean
    },
    title: {
      type: GraphQLString
    },
    photo: {
      type: GraphQLString
    }
  })
});

export default characterType;
