/**
 * Created by mikhail on 19.11.15.
 */
import {GraphQLList, GraphQLID} from 'graphql';
import {fromGlobalId} from 'graphql-relay';
import character from '../../../../../types/character.js';
import data from '../../../../../../../data/characters.js';

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
          let {id} = fromGlobalId(args[filterKey])

          return !existed && character[filterKey] === id;
        }));
      }, []);
    }

    return result;
  }
}
