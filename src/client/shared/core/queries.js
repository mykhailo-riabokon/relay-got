/**
 * Created by mikhail on 09.11.15.
 */
import Relay from 'react-relay';

export const viewer = () => Relay.QL`
  query {
    viewer
  }
`;

export const family = (Component, {region}) => Relay.QL`
  query {
    family(region: $region) {
      ${Component.getFragment('family')}
    }
  }
`;

export const members = (Component, {familyId}) => Relay.QL`
  query {
    viewer {
      ${Component.getFragment('members', {familyId})}
    }
  }
`;
