/**
 * Created by mikhail on 12.11.15.
 */
import Relay from 'react-relay';
import Members from './Memebers.jsx';
import Member from './components/member/index.js';

export default Relay.createContainer(Members, {
  fragments: {
    members: () => Relay.QL`
      fragment on Viewer {
        members: characters(family: $family) {
          ${Member.getFragment('member')}
        }
      }
    `
  }
});
