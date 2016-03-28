import {GraphQLList, GraphQLString} from 'graphql';
import {fromGlobalId} from 'graphql-relay';
import RegionType from './Region.type'

export default {
  type: new GraphQLList(RegionType),
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve(_, args, { rootValue }) {
    return rootValue.regionService.getRegion(args);
  }
}
