/**
 * Created by mikhail on 02.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Relay from 'react-relay';

require('./index.less');

class Family extends Component {
  static defaultProps = {
    families: null
  };

  render() {
    let style = {
      color: '#f00'
    };

    //debugger;

    return (
      <h1 style={style}>Family</h1>
    );
  }
}

Family = Relay.createContainer(Family, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        families {
          name
        }
      }
    `
  }
});

class Region extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };
  static contextTypes = {
    showModal: PropTypes.func
  };
  showRegion = () => {
    this.context.showModal(<Family />);
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
