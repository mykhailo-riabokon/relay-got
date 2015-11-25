/**
 * Created by mikhail on 11.11.15.
 */
import {GraphQLString, GraphQLNonNull} from 'graphql';
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
    return data.find(item => item.regionId === regionId) || {};
  }
}
