import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import List from 'components/List.jsx';
import Character from './components/character/index.jsx';
import './characters.less';

export class Characters extends Component {
  static propTypes = {
    members: PropTypes.object
  };
  static defaultProps = {
    members: {
      characters: []
    }
  };

  getCharacter = (character, index) => {
    return <Character charactersId={this.props.characters.id} character={character} key={index} />;
  };

  render() {
    return (
      <div className="characters-container">
        <h2 className="character-header">Citizens</h2>
        <List className="characters" data={this.props.characters.list} renderItemMethod={this.getCharacter}/>
      </div>
    );
  }
}

export default Relay.createContainer(Characters, {
  initialVariables: {
    familyId: '',
    regionId: ''
  },

  fragments: {
    characters: () => Relay.QL`
      fragment on Characters {
        id,
        list(familyId: $familyId, regionId: $regionId) {
          ${Character.getFragment('character')}
        }
      }
    `
  }
});
