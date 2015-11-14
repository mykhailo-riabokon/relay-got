import React, {PropTypes, Component} from 'react';
import List from 'components/List.jsx';
import Member from './components/member/index.js';

class Members extends Component {
  static propTypes = {
    members: PropTypes.object
  };
  static defaultProps = {
    members: {
      characters: []
    }
  };
  getMember(member, index) {
    return <Member member={member} key={index} />
  }
  render() {
    return (
      <List data={this.props.members.characters} renderItemMethod={this.getMember}/>
    );
  }
}

export default Members;
