/**
 * Created by mikhail on 03.11.15.
 */
import Relay from 'react-relay';
import Westeros from './Westeros.jsx';

export default Relay.createContainer(Westeros, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        regions {
          id,
          name
        }
      }
    `
  }
});