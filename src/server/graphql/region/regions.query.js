import { GraphQLList } from 'graphql';
import RegionType from './Region.type';

export default {
  type: new GraphQLList(RegionType),
  resolve({}, {}, { rootValue }) {
    return rootValue.regionService.getRegions();
  },
};
