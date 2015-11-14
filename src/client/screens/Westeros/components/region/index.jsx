/**
 * Created by mikhail on 02.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Relay, {RootContainer, Route} from 'react-relay';
import Family from './components/family/index.jsx';
import {FamilyRoute} from 'core/routes.js';

require('./region.less');

export class Region extends Component {
  static propTypes = {
    region: PropTypes.object
  };
  static contextTypes = {
    showModal: PropTypes.func
  };
  showRegion = () => {
    let route = new FamilyRoute({
      regionId: this.props.region.id
    });

    this.context.showModal(
      <RootContainer
        route={route}
        Component={Family}/>
    );
  };
  get className() {
    let {name} = this.props.region || '';

    name = name.replace(/\W/g, '');

    return name.substr(0, 1).toLowerCase() + name.substr(1);
  }
  render() {
    return (
      <div className={`region ${this.className}`} onClick={this.showRegion}>
        <div className="title">{this.props.region.name}</div>
      </div>
    );
  }
}

export default Relay.createContainer(Region, {
  fragments: {
    region: () => Relay.QL`
      fragment on Region {
        id,
        name
      }
    `
  }
});
