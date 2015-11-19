/**
 * Created by mikhail on 19.11.15.
 */
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from '../graphqlRelay.js';

const familyType = new GraphQLObjectType({
  name: 'Family',
  descriptions: 'Family',
  isTypeOf: (obj) => {
    let {type} = obj;

    if (type && type.toLocaleLowerCase) {
      type = type.toLocaleLowerCase();
    }

    return type  === 'family';
  },
  fields: () => ({
    id: globalIdField('Family'),
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
  }),
  interfaces: [nodeInterface]
});

export default familyType;
