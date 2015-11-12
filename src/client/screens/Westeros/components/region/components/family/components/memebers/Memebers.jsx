import React, {PropTypes, Component} from 'react';
import List from 'components/List.jsx';
import Member from './components/member/Member.jsx';

class Members extends Component {
  static propTypes = {
    members: PropTypes.object
  };
  static defaultProps = {
    members: {
      characters: []
    }
  };
  getMember(data, index) {
    return <Member key={index} {...data}/>
  }
  render() {
    return (
      <List data={this.props.members.characters} renderItemMethod={this.getMember}/>
    );
  }
}

export default Members;
