/**
 * Created by mikhail on 01.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import Region from './components/region/index.jsx';
import List from 'components/List.jsx';
import Modal from 'components/Modal.jsx';

require('./westeros.less');

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
    return <Region key={index} region={region}/>
  }
  render() {
    return (
      <div className="westeros">
        <h1 className="header">Westeros</h1>
        <List className="regions" data={this.props.regions.list} renderItemMethod={this.getRegion}/>
        <Modal onRequestClose={this.hideModal} isOpen={this.state.showModal}>{this.state.modalContent}</Modal>
      </div>
    );
  }
}

export default Relay.createContainer(Westeros, {
  fragments: {
    regions: () => Relay.QL`
      fragment on Regions {
        list {
          ${Region.getFragment('region')}
        }
      }
    `
  }
});
