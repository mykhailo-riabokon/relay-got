import React, {PropTypes, Component} from 'react';

class Members extends Component {
  static propTypes = {
    members: PropTypes.object
  };
  static defaultProps = {
    members: {
      characters: []
    }
  };
  render() {
    console.log(this.props.members.characters);

    return (
        <h1>members</h1>
    );
  }
}

export default Members;
