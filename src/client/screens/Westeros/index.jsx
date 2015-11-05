/**
 * Created by mikhail on 01.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Region from './components/region/index.jsx';
import List from 'components/List.jsx';

require('./index.less');

class Westeros extends Component {
  static propTypes = {
    viewer: PropTypes.object
  };

  getRegion(data, index) {
    return <Region key={index} {...data}/>
  }
  render() {
    return (
        <div className="westeros">
          <h1 className="header">Westeros</h1>
          <List className="regions" data={this.props.viewer.regions} renderItemMethod={this.getRegion}/>
        </div>
    );
  }
}

export default Westeros;
