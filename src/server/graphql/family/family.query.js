import { GraphQLString } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import FamilyType from './Family.type';

export default {
  type: FamilyType,
  args: {
    regionId: {
      type: GraphQLString,
    },
  },
  resolve(_, args, { rootValue }) {
    const regionId = args.regionId ? fromGlobalId(args.regionId).id : null;

    return rootValue.familyService.getFamily(regionId);
  },
};
