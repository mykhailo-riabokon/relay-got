/**
 * Created by mikhail on 25.11.15.
 */
import {GraphQLNonNull, GraphQLString} from 'graphql';
import {mutationWithClientMutationId, fromGlobalId} from 'graphql-relay';
import characters from '../queries/queries/characters';
import {reviveCharacter} from '../../../data/characters.js';

export default mutationWithClientMutationId({
  name: 'ReviveCharacter',
  inputFields: {
    characterId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the enterprise'
    }
  },
  outputFields: {
    characters
  },
  mutateAndGetPayload({characterId}) {
    let {id} = fromGlobalId(characterId);
    
    // revive in list
    reviveCharacter(id);

    return {};
  }
});
