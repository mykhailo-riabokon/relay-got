import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';

require('./character.less');

export class Character extends Component {
  render() {
    let {name, photo, isDead} = this.props.character;
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

export default Relay.createContainer(Character, {
  fragments: {
    character: () => Relay.QL`
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
