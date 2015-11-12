/**
 * Created by mikhail on 12.11.15.
 */
import Relay from 'react-relay';
import Member from './Member.jsx';

export default Relay.createContainer(Member, {
  fragments: {
    member: () => Relay.QL`
      fragment on Character {
        name
      }
    `
  }
});
