/**
 * Created by mikhail on 02.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';

require('./index.less');

class Family extends Component {
  render() {
    return (
      <h1>Family</h1>
    );
  }
}



class Region extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };
  static contextTypes = {
    showModal: PropTypes.func
  };
  showRegion() {
    this.context.showModal();
    console.log('show region')
  }
  get className() {
    let name = this.props.name.replace(/\W/g, '');

    return name.substr(0, 1).toLowerCase() + name.substr(1);
  }
  render() {
    return (
      <div className={`region ${this.className}`} onClick={::this.showRegion}>
        <div className="title">{this.props.name}</div>
      </div>
    );
  }
}

export default Region;
