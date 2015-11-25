/**
 * Created by mikhail on 25.11.15.
 */
import Relay, {Mutation} from 'react-relay';

class ReviveCharacterMutation extends Mutation {
  getMutation() {
    return Relay.QL`
      mutation {
        reviveCharacter
      }
    `;
  }

  getVariables() {
    return {
      characterId: this.props.characterId
    };
  }

  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          characters: this.props.charactersId
        }
      }
    ];
  }

  getFatQuery() {
    return Relay.QL`
      fragment on ReviveCharacterPayload {
        characters
      }
    `;
  }
}

export default ReviveCharacterMutation;
