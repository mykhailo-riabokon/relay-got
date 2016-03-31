import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';
import './region.less';

export class Region extends Component {
  static propTypes = {
    region: PropTypes.object,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  showRegion = () => {
    this.context.router.push({
      pathname: '/region',
      query: {
        regionId: this.props.region.id,
      },
    });
  };

  get className() {
    let { name } = this.props.region;

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
