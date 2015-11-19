/**
 * Created by mikhail on 19.11.15.
 */
import {
  GraphQLList,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from '../graphqlRelay.js';

const characterType = new GraphQLObjectType({
  name: 'Character',
  description: 'character from GOT',
  isTypeOf: (obj) => {
    let {type} = obj;

    if (type && type.toLocaleLowerCase) {
      type = type.toLocaleLowerCase();
    }

    return type  === 'character';
  },
  fields: () => ({
    id: globalIdField('Character'),
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
  }),
  interfaces: [nodeInterface]
});

export default characterType;
