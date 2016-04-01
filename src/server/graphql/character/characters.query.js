import { GraphQLList, GraphQLString } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import CharacterType from './Character.type';

export default {
  type: new GraphQLList(CharacterType),
  args: {
    regionId: {
      type: GraphQLString,
    },
  },
  resolve(_, args, { rootValue }) {
    const regionId = args.regionId ? fromGlobalId(args.regionId).id : null;

    return rootValue.characterService.getCharecters(regionId);
  },
};
