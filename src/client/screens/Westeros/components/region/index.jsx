/**
 * Created by mikhail on 02.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Relay, {RootContainer, Route} from 'react-relay';
import Family from './components/family/index.jsx';
import {FamilyRoute} from 'core/routes.js';

require('./region.less');

class Region extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };
  static contextTypes = {
    showModal: PropTypes.func
  };
  showRegion = () => {
    let route = new FamilyRoute({
      region: this.props.name
    });

    this.context.showModal(
      <RootContainer
        route={route}
        Component={Family}/>
    );
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
