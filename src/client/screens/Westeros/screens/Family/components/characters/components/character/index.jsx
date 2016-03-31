import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import ToggleCharacterMutation from './ToggleCharacterMutation.js';
import './character.less';

export class Character extends Component {
  static propTypes = {
    character: PropTypes.object
  };

  reviveCharacter = () => {
    const {id, isDead} = this.props.character;

    Relay.Store.update(new ToggleCharacterMutation({
      characterId: id,
      kill: !isDead,
      charactersId: this.props.charactersId
    }), {
      onFailure: (transaction) => {
        throw new Error('Something went wrong')
      },
      onSuccess: (response) => {
        console.log('Success');
      }
    })
  };

  render() {
    const {name, photo, isDead} = this.props.character;
    const style = {
      backgroundImage: `url(${photo})`
    };
    const classes = `character ${isDead ? 'character--dead': ''}`;

    return (
      <div className={classes} onClick={this.reviveCharacter}>
        <div className="character__photo" style={style}></div>
        <div className="character__name">{name}</div>
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
