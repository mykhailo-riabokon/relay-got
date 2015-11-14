/**
 * Created by mikhail on 09.11.15.
 */
import Relay from 'react-relay';

export const viewer = () => Relay.QL`
  query {
    viewer
  }
`;

export const family = (Component, {regionId}) => Relay.QL`
  query {
    family(regionId: $regionId) {
      ${Component.getFragment('family', {regionId})}
    }
  }
`;

export const members = (Component, {familyId, regionId}) => Relay.QL`
  query {
    viewer {
      ${Component.getFragment('members', {familyId, regionId})}
    }
  }
`;
