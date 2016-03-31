import React, { PropTypes, Component } from 'react';
import Relay from 'react-relay';
import ReactModal from 'react-modal';
import Family from './components/Family';

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
      overlay : {
        backgroundColor: 'rgba(0,0,0, 0.6)'
      },
      content : {
        border: 'none',
        background: 'rgba(0,0,0, 0.9)'
      }
    };

    return (
      <ReactModal isOpen={true} onRequestClose={this.backToWesteros} style={styles}>
        <Family family={this.props.viewer.family} />
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
        family(regionId: $regionId) {
          ${Family.getFragment('family')}
        }
      }
    `
  }
});
