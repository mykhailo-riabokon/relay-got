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
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from '../graphqlRelay.js';

const regionType = new GraphQLObjectType({
  name: 'Region',
  descriptions: 'Regions of Seven Kingdoms',
  isTypeOf: (obj) => {
    let {type} = obj;

    if (type && type.toLocaleLowerCase) {
      type = type.toLocaleLowerCase();
    }

    return type  === 'region';
  },
  fields: () => ({
    id: globalIdField('Region'),
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
  }),
  interfaces: [nodeInterface]
});

export default regionType;
