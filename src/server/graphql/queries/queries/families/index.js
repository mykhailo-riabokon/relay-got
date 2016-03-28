/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from '../../../graphqlRelay.js';
import list from './queries/list';

const FAMILIES = 'Families';

export default {
  type: new GraphQLObjectType({
    name: FAMILIES,
    isTypeOf: (obj) => {
      return (obj.id === FAMILIES);
    },
    description: 'Families of Westeros',
    fields: () => ({
      id: globalIdField('Families'),
      list: list
    }),
    interfaces: [nodeInterface]
  }),
  resolve() {
    return {
      id: FAMILIES
    };
  }
}
