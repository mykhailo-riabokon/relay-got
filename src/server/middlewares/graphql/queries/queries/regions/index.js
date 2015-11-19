/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLObjectType} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from '../../../graphqlRelay.js';
import list from './queries/list';

const REGIONS = 'Regions';

export default {
  type: new GraphQLObjectType({
    name: REGIONS,
    isTypeOf: (obj) => {
      console.log(obj.id)

      return (obj.id === REGIONS);
    },
    description: 'Regions of Westeros',
    fields: () => ({
      id: globalIdField('Regions')
      ,
      list: list
    }),
    interfaces: [nodeInterface]
  }),
  resolve() {
    return {
      id: REGIONS
    };
  }
}
