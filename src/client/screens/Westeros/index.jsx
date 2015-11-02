/**
 * Created by mikhail on 01.11.15.
 */
import React, {PropTypes, Component} from 'react';

require('./index.less');

let regions = [
  {
    name: 'The North',
    rulers: 'House Stark',
    capital: 'Winterfell',
    religion: 'The Old Gods of the Forest',
    bastardSurname: 'Snow'
  },
  {
    name: 'The Vale of Arryn',
    rulers: 'House Arryn',
    capital: 'The Eyrie',
    religion: 'The Faith of the Seven',
    bastardSurname: 'Stone'
  },
  {
    name: 'The Riverlands',
    rulers: 'House Frey',
    capital: 'Riverrun',
    religion: null,
    bastardSurname: 'Rivers'
  }
];

class Region extends Component {
  static propTypes = {

  };

  get className() {
    let name = this.props.name.replace(/\W/g, '');

    return name.substr(0, 1).toLowerCase() + name.substr(1);
  }
  render() {
    return <h1 className="region" className={this.className}>region</h1>
  }
}

class Westeros extends Component {
  static propTypes = {};
  render() {
    return (
        <div className="westeros">
          <h1 className="header">Westeros</h1>
          <div className="regions">{regions.map((region, index) => <Region {...region} key={index}/>)}</div>
        </div>
    );
  }
}

export default Westeros;