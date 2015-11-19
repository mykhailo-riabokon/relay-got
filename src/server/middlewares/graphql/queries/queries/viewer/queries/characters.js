/**
 * Created by mikhail on 19.11.15.
 */
/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLList, GraphQLID} from 'graphql';
import character from '../../../../types/character.js';
import data from '../../../../../../data/regions.js';

export default {
  type: new GraphQLList(character),
  args: {
    id: {
      type: GraphQLID
    },
    familyId: {
      type: GraphQLID
    },
    regionId: {
      type: GraphQLID
    }
  },
  resolve: (rootValue, args) => {
    let filterKeys = Object.keys(args);
    let result = data;

    if (filterKeys.length) {
      result = filterKeys.reduce((memo, filterKey) => {
        return memo.concat(result.filter(character => {
          let existed = memo.find(record => record.id === character.id);

          return !existed && character[filterKey] === args[filterKey];
        }));
      }, []);
    }

    return result;
  }
}
