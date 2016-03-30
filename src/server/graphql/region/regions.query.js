import {GraphQLList, GraphQLString} from 'graphql';
import {fromGlobalId} from 'graphql-relay';
import RegionType from './Region.type'

export default {
  type: new GraphQLList(RegionType),
  resolve({}, {}, { rootValue }) {
    return rootValue.regionService.getRegions();
  }
}
