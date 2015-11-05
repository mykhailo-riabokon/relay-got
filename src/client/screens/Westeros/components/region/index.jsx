/**
 * Created by mikhail on 02.11.15.
 */
import React, {PropTypes, Component} from 'react';

require('./index.less');

class Region extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };
  showRegion() {
    console.log('show region')
  }
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
