/**
 * Created by mikhail on 09.11.15.
 */
import Family from './Family.jsx';
import Relay from 'react-relay';

export default Relay.createContainer(Family, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        families {
          name
        }
      }
    `
  }
});
