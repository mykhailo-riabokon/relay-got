/**
 * Created by mikhail on 25.11.15.
 */
import {GraphQLNonNull, GraphQLString, GraphQLBoolean} from 'graphql';
import {mutationWithClientMutationId, fromGlobalId} from 'graphql-relay';
import characters from '../queries/queries/characters';
import {toggleCharacter} from '../../../data/characters.js';

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
  outputFields: {
    characters
  },
  mutateAndGetPayload({characterId, kill}) {
    let {id} = fromGlobalId(characterId);

    // revive in list
    toggleCharacter(id, kill);

    return {};
  }
});
