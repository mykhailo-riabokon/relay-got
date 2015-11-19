/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from '../../../graphqlRelay.js';
import list from './queries/list';

const CHARACTERS = 'Characters';

export default {
  type: new GraphQLObjectType({
    name: CHARACTERS,
    isTypeOf: (obj) => {
      return (obj.id === CHARACTERS);
    },
    description: 'Characters of Westeros',
    fields: () => ({
      id: globalIdField('Characters'),
      list: list
    }),
    interfaces: [nodeInterface]
  }),
  resolve() {
    return {
      id: CHARACTERS
    };
  }
}
