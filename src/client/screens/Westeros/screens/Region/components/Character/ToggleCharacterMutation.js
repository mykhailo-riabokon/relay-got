import Relay, { Mutation } from 'react-relay';

class ToggleCharacterMutation extends Mutation {
  getMutation() {
    return Relay.QL`
      mutation {
        toggleCharacter
      }
    `;
  }

  getVariables() {
    const { kill, characterId } = this.props;

    return { characterId, kill };
  }

  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          viewer: this.props.viewerId
        }
      }
    ];
  }

  getFatQuery() {
    return Relay.QL`
      fragment on ToggleCharacterPayload {
        viewer
      }
    `;
  }
}

export default ToggleCharacterMutation;
