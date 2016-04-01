import {GraphQLNonNull, GraphQLString, GraphQLBoolean} from 'graphql';
import {mutationWithClientMutationId, fromGlobalId} from 'graphql-relay';
import viewer from '../viewer';

export default mutationWithClientMutationId({
  name: 'ToggleCharacter',
  inputFields: {
    kill: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Kill or not'
    },
    characterId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Character id'
    }
  },
  outputFields: () => ({ viewer }),
  mutateAndGetPayload(args, { rootValue }) {
    const { id } = fromGlobalId(args.characterId);

    return rootValue.characterService.toggleCharacter(id, args.kill);
  }
});
