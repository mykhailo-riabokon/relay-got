import Relay from 'react-relay';

const viewer = () => Relay.QL`
  query Root {
    viewer
  }
`;

export default {
  viewer,
};
