/**
 * Created by mikhail on 12.11.15.
 */
import Relay from 'react-relay';
import Members from './Memebers.jsx';
import Member from './components/member/index.js';

export default Relay.createContainer(Members, {
  initialVariables: {
    familyId: ''
  },

  fragments: {
    members: () => Relay.QL`
      fragment on Viewer {
        characters(familyId: $familyId) {
          ${Member.getFragment('member')}
        }
      }
    `
  }
});
