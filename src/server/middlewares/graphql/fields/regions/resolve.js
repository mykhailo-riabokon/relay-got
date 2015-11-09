/**
 * Created by mikhail on 31.10.15.
 */
export default function (rootValue, {id}) {
  let result  = [
    {
      id: '1',
      name: 'The North',
      rulers: 'House Stark',
      capital: 'Winterfell',
      religion: 'The Old Gods of the Forest',
      bastardSurname: 'Snow'
    },
    {
      id: '2',
      name: 'The Vale of Arryn',
      rulers: 'House Arryn',
      capital: 'The Eyrie',
      religion: 'The Faith of the Seven',
      bastardSurname: 'Stone'
    },
    {
      id: '3',
      name: 'The Riverlands',
      rulers: 'House Frey',
      capital: 'Riverrun',
      religion: null,
      bastardSurname: 'Rivers'
    },
    {
      id: '4',
      name: 'The Westerlands',
      rulers: 'House Lannister',
      capital: 'Casterly Rock',
      religion: 'The Faith of the Seven',
      bastardSurname: 'Hill'
    },
    {
      id: '5',
      name: 'The Iron Islands',
      rulers: 'House Greyjoy',
      capital: 'Pyke',
      religion: 'The Drowned God',
      bastardSurname: 'Pyke'
    },
    {
      id: '6',
      name: 'The Crownlands',
      rulers: 'The King on the Iron Throne',
      capital: 'King\'s Landing',
      religion: 'Faith of the Seven',
      bastardSurname: 'Waters'
    },
    {
      id: '7',
      name: 'The Stormlands',
      rulers: 'House Baratheon',
      capital: 'Storm\'s End',
      religion: 'The Faith of the Seven',
      bastardSurname: 'Storm'
    },
    {
      id: '8',
      name: 'The Reach',
      rulers: 'House Tyrell',
      capital: 'Highgarden',
      religion: 'The Faith of the Seven',
      bastardSurname: 'Flowers'
    },
    {
      id: '9',
      name: 'Dorne',
      rulers: 'House Martell',
      capital: 'Sunspear',
      religion: 'The Faith of the Seven',
      bastardSurname: 'Sand'
    },
    {
      id: '10',
      name: 'Beyond the Wal',
      rulers: 'King-Beyond-the-Wall',
      capital: null,
      religion: 'The Old Gods of the Forest',
      bastardSurname: 'Sand'
    }
  ];

  if (id) {
    result = result.filter(region => region.id === id);
  }

  return result;
}
