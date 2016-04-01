import React, { PropTypes, Component } from 'react';
import Relay from 'react-relay';
import ToggleCharacterMutation from './ToggleCharacterMutation.js';
import './index.less';

export class Character extends Component {
  static propTypes = {
    character: PropTypes.object,
    viewerId: PropTypes.string,
  };

  toggleCharacter = () => {
    const { id, isDead } = this.props.character;

    Relay.Store.commitUpdate(
      new ToggleCharacterMutation({
        characterId: id,
        kill: !isDead,
        viewerId: this.props.viewerId,
      }),
      {
        onFailure: () => {
          throw new Error('Something went wrong');
        },
        onSuccess: (response) => {
          /* eslint no-console: 0 */
          console.log('Success', response);
        },
      }
    );
  };

  render() {
    const { name, photo, isDead } = this.props.character;
    const style = {
      backgroundImage: `url(${photo})`,
    };
    const classes = `character ${isDead ? 'character--dead' : ''}`;

    return (
      <div className={classes} onClick={this.toggleCharacter}>
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
    `,
  },
});
