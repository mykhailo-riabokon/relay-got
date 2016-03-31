import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import Region from './components/Region';

import './index.less';

export class Westeros extends Component {
  static propTypes = {
    viewer: PropTypes.object
  };

  getRegion(region, index) {
    return <Region key={index} region={region}/>;
  }

  render() {
    return (
      <div className="westeros">
        <h1 className="header">Westeros</h1>
        <div className="regions">{this.props.viewer.regions.map(this.getRegion)}</div>
        {this.props.children}
      </div>
    );
  }
}

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
