import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import ReviveCharacterMutation from './ReviveCharacterMutation.js';

require('./character.less');

export class Character extends Component {
  static propTypes = {
    character: PropTypes.object
  };
  reviveCharacter = () => {
    let {id, isDead} = this.props.character;

    if (isDead) {
      Relay.Store.update(new ReviveCharacterMutation({
        characterId: id,
        charactersId: this.props.charactersId
      }), {
        onFailure: (transaction) => {
          throw new Error('Something went wrong')
        },
        onSuccess: (response) => {
          console.log('Successed revived');
        }
      })
    }
  };

  render() {
    let {name, photo, isDead} = this.props.character;
    let style = {
      backgroundImage: `url(${photo})`
    };
    let classes = `character ${isDead ? 'character--dead': ''}`;

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
