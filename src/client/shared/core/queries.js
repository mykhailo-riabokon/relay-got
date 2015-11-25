/**
 * Created by mikhail on 09.11.15.
 */
import Relay from 'react-relay';

export const regions = () => Relay.QL`
  query {
    regions
  }
`;

export const family = (Component, {regionId}) => Relay.QL`
  query {
    family(regionId: $regionId) {
      ${Component.getFragment('family', {regionId})}
    }
  }
`;

export const characters = (Component, {familyId, regionId}) => Relay.QL`
  query {
    characters {
      ${Component.getFragment('characters', {familyId, regionId})}
    }
  }
`;
