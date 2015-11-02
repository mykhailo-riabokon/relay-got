/**
 * Created by mikhail on 01.11.15.
 */
import React, {PropTypes, Component} from 'react';
import Region from './components/region/index.jsx';
import List from 'components/List.jsx';

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
  },
  {
    name: 'The Westerlands',
    rulers: 'House Lannister',
    capital: 'Casterly Rock',
    religion: 'The Faith of the Seven',
    bastardSurname: 'Hill'
  },
  {
    name: 'The Iron Islands',
    rulers: 'House Greyjoy',
    capital: 'Pyke',
    religion: 'The Drowned God',
    bastardSurname: 'Pyke'
  },
  {
    name: 'The Crownlands',
    rulers: 'The King on the Iron Throne',
    capital: 'King\'s Landing',
    religion: 'Faith of the Seven',
    bastardSurname: 'Waters'
  },
  {
    name: 'The Stormlands',
    rulers: 'House Baratheon',
    capital: 'Storm\'s End',
    religion: 'The Faith of the Seven',
    bastardSurname: 'Storm'
  },
  {
    name: 'The Reach',
    rulers: 'House Tyrell',
    capital: 'Highgarden',
    religion: 'The Faith of the Seven',
    bastardSurname: 'Flowers'
  },
  {
    name: 'Dorne',
    rulers: 'House Martell',
    capital: 'Sunspear',
    religion: 'The Faith of the Seven',
    bastardSurname: 'Sand'
  },
  {
    name: 'Beyond the Wal',
    rulers: 'King-Beyond-the-Wall',
    capital: null,
    religion: 'The Old Gods of the Forest',
    bastardSurname: 'Sand'
  }
];

class Westeros extends Component {
  static propTypes = {};

  getRegion(data, index) {
    return <Region key={index} {...data}/>
  }
  render() {
    return (
        <div className="westeros">
          <h1 className="header">Westeros</h1>
          <List className="regions" data={regions} renderItemMethod={this.getRegion}/>
        </div>
    );
  }
}

export default Westeros;