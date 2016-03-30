import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import Region from './components/Region';
import List from 'components/List.jsx';
import Modal from 'components/Modal.jsx';
import './index.less';

export class Westeros extends Component {
  static propTypes = {
    viewer: PropTypes.object
  };
  static childContextTypes = {
    showModal: PropTypes.func
  };

  state = {
    showModal: false,
    modalContent: null
  };

  hideModal = () => {
    this.setState({
      showModal: false,
      modalContent: null
    });
  };

  showModal = (content) => {
    this.setState({
      showModal: true,
      modalContent: content
    });
  };

  getChildContext() {
    return {
      showModal: this.showModal
    };
  }

  getRegion(region, index) {
    return <Region key={index} region={region}/>;
  }

  render() {
    return (
      <div className="westeros">
        <h1 className="header">Westeros</h1>
        <div className="regions">{this.props.viewer.regions.map(this.getRegion)}</div>
      </div>
    );
  }
}

// <Modal onRequestClose={this.hideModal} isOpen={this.state.showModal}>{this.state.modalContent}</Modal>

export default Relay.createContainer(Westeros, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        regions {
          ${Region.getFragment('region')}
        }
      }
    `
  }
});
