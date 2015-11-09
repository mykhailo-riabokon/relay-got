/**
 * Created by mikhail on 02.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Relay, {RootContainer, Route} from 'react-relay';
import Family from './components/family/index.js';
import {Viewer} from '../../../../routes.js';

require('./index.less');

class Region extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };
  static contextTypes = {
    showModal: PropTypes.func
  };
  showRegion = () => {
    this.context.showModal(<RootContainer route={new Viewer()} Component={Family}/>);
    console.log('show region')
  };
  get className() {
    let name = this.props.name.replace(/\W/g, '');

    return name.substr(0, 1).toLowerCase() + name.substr(1);
  }
  render() {
    return (
      <div className={`region ${this.className}`} onClick={this.showRegion}>
        <div className="title">{this.props.name}</div>
      </div>
    );
  }
}

export default Region;
