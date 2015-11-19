/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLList, GraphQLID} from 'graphql';
import region from '../../../../types/region.js';
import data from '../../../../../../data/regions.js';

export default {
  type: new GraphQLList(region),
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve: (rootValue, {id}) => {
    let result = data;

    if (id) {
      result = result.filter(region => region.id === id);
    }

    return result;
  }
}
