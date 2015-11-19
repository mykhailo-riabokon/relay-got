/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLList, GraphQLID} from 'graphql';
import family from '../../../../types/family.js';
import data from '../../../../../../data/families.js';

export default {
  type: new GraphQLList(family),
  resolve: (rootValue, args) => {
    let filterKeys = Object.keys(args);
    let result = data;

    if (filterKeys.length) {
      result = filterKeys.reduce((memo, filterKey) => {
        return memo.concat(result.filter(family => {
          return family[filterKey] === args[filterKey]
        }));
      }, []);
    }

    return result;
  }
}
