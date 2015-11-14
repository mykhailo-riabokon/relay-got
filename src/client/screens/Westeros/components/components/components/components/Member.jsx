import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';

export class Member extends Component {
  render() {
    console.log(this.props);

    return (
        <h1>member</h1>
    );
  }
}

export default Relay.createContainer(Member, {
  fragments: {
    member: () => Relay.QL`
      fragment on Character {
        name,
        id
      }
    `
  }
});
