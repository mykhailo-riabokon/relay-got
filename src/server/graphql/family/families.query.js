import {GraphQLList, GraphQLString} from 'graphql';
import {fromGlobalId} from 'graphql-relay';
import FamilyType from './Family.type'

export default {
  type: new GraphQLList(FamilyType),
  args: {
    familyId: {
      type: GraphQLString
    }
  },
  resolve(_, args, { rootValue }) {
    return rootValue.familyService.getFamilies(args);
  }
}
