/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLString, GraphQLNonNull} from 'graphql';
import {fromGlobalId} from 'graphql-relay';
import familyType from '../../../types/family.js';
import data from '../../../../../data/families.js';

export default {
  type: familyType,
  args: {
    regionId: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (_, {regionId}) => {
    let {id} = fromGlobalId(regionId);
    let defaultRes = {
      type: 'family'
    };

    return data.find(item => item.regionId === id) || defaultRes;
  }
}
