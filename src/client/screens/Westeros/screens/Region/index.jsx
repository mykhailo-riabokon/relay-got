import React, { PropTypes, Component } from 'react';
import Relay from 'react-relay';
import ReactModal from 'react-modal';
import Family from './components/Family';
import Character from './components/Character';
import './index.less';

class Region extends Component {
  static propTypes = {
    viewer: PropTypes.object,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  backToWesteros = () => {
    this.context.router.push({ pathname: '/' });
  };

  render() {
    const styles = {
      overlay: {
        backgroundColor: 'rgba(0,0,0, 0.6)',
      },
      content: {
        border: 'none',
        background: 'rgba(0,0,0, 0.9)',
      },
    };
    const isOpen = true;

    function renderCharacter(character, index) {
      return <Character viewerId={this.props.viewer.id} character={character} key={index} />;
    }

    return (
      <ReactModal isOpen={isOpen} onRequestClose={this.backToWesteros} style={styles}>
        <div className="region-container">
          <Family family={this.props.viewer.family} />
          <div className="characters-container">
            <h2 className="character-header">Citizens</h2>
            <div className="characters">
              {this.props.viewer.characters.map(renderCharacter)}
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Relay.createContainer(Region, {
  initialVariables: {
    regionId: null,
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        family(regionId: $regionId) {
          ${Family.getFragment('family')},
        },
        characters(regionId: $regionId) {
          ${Character.getFragment('character')},
        },
      },
    `,
  },
});
