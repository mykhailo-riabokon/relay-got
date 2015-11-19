/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLList, GraphQLID} from 'graphql';
import family from '../../../../../types/family.js';
import data from '../../../../../../../data/families.js';

export default {
  type: new GraphQLList(family),
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve: (rootValue, {id}) => {
    let result = data;

    if (id) {
      result = result.filter(family => family.id === id);
    }

    return result;
  }
}
