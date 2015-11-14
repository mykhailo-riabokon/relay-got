import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';

require('./member.less');

export class Member extends Component {
  render() {
    let {name, photo, isDead} = this.props.member;
    let style = {
      backgroundImage: `url(${photo})`
    };
    let classes = `member ${isDead ? 'dead': ''}`;

    return (
      <div className={classes}>
        <div className="member__photo" style={style}></div>
        <div className="member__name">{name}</div>
      </div>
    );
  }
}

export default Relay.createContainer(Member, {
  fragments: {
    member: () => Relay.QL`
      fragment on Character {
        id
        name,
        isDead,
        title,
        photo
      }
    `
  }
});
