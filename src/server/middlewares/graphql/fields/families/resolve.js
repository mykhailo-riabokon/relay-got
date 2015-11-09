/**
 * Created by mikhail on 31.10.15.
 */
export default function (rootValue, {familiId}) {
  console.log(arguments)

  return [
    {
      id: '1',
      name: 'Stark',
      region: 'The North',
      words: 'Winter is Coming',
      bustards: [
        {
          name: 'John',
          isDead: true
        }
      ]
    },
    {
      id: '2',
      name: 'Arryn',
      region: 'The Vale of Arryn',
      words: 'As High as Honor'
    },
    {
      id: '3',
      name: 'Tully',
      region: 'The Riverlands',
      words: 'Family, Duty, Honor'
    },
    {
      id: '4',
      name: 'Lannister',
      region: 'The Westerlands',
      words: 'A Lannister Always Pays His Debts'
    },
    {
      id: '5',
      name: 'Greyjoy',
      region: 'The Iron Islands',
      words: 'We Do Not Sow'
    },
    {
      id: '6',
      name: 'Baratheon',
      region: 'The Stormlands',
      words: 'Ours is the Fury'
    }
  ]
}
