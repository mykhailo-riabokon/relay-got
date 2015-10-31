/**
 * Created by mikhail on 31.10.15.
 */
export default function () {
  return [
    {
      name: 'Stark',
      region: 'The North',
      words: 'Winter is Coming',
      bustards: [
        {
          name: 'John',
          isDead: true
        }
      ],
      members: [
        {
          name: 'Eddard',
          isDead: true,
          title: 'lord'
        },
        {
          name: 'Catelyn',
          isDead: true,
          title: 'lady'
        },
        {
          name: 'Robb',
          isDead: true,
          title: 'lord'
        },
        {
          name: 'Sansa',
          isDead: false,
          title: 'princess'
        },
        {
          name: 'Arya',
          isDead: false,
          title: 'princess'
        },
        {
          name: 'Bran',
          isDead: false,
          title: 'prince'
        },
        {
          name: 'Rickon',
          isDead: false,
          title: 'prince'
        }
      ]
    },
    {
      name: 'Arryn',
      region: 'The Vale of Arryn',
      words: 'As High as Honor',
      members: [
        {
          name: 'John',
          isDead: true,
          title: 'lord'
        },
        {
          name: 'Lysa',
          isDead: false,
          title: 'lady'
        },
        {
          name: 'Robin',
          isDead: false,
          title: 'lord'
        }
      ]
    },
    {
      name: 'Tully',
      region: 'The Riverlands',
      words: 'Family, Duty, Honor',
      members: [
        {
          name: 'Hoster',
          isDead: true,
          title: 'lord'
        },
        {
          name: 'Manisa',
          isDead: true,
          title: 'lady'
        },
        {
          name: 'Catelyn',
          husbandHouse: 'Stark'
        },
        {
          name: 'Lysa',
          husbandHouse: 'Stark'
        },
        {
          name: 'Edmure',
          isDead: false,
          title: 'lord'
        },
        {
          name: 'Brynden',
          isDead: false,
          title: 'ser'
        }
      ]
    },
    {
      name: 'Lannister',
      region: 'The Westerlands',
      words: 'A Lannister Always Pays His Debts',
      members: [
        {
          name: 'Tywin',
          isDead: true,
          title: 'lord'
        },
        {
          name: 'Joanna',
          isDead: true,
          title: 'lady'
        },
        {
          name: 'Cersei',
          husbandHouse: 'Baratheon'
        },
        {
          name: 'Jaime',
          isDead: false,
          title: 'ser'
        },
        {
          name: 'Tyrion',
          isDead: false,
          title: null
        }
      ]
    },
    {
      name: 'Greyjoy',
      region: 'The Iron Islands',
      words: 'We Do Not Sow',
      members: [
        {
          name: 'Balon',
          isDead: false,
          title: 'lord'
        },
        {
          name: 'Alannys',
          husbandHouse: 'Harlaw'
        },
        {
          name: 'Rodrik',
          isDead: true,
          title: null
        },
        {
          name: 'Maron',
          isDead: true,
          title: null
        },
        {
          name: 'Yara',
          isDead: false,
          title: null
        },
        {
          name: 'Theon',
          isDead: false,
          title: null
        }
      ]
    },
    {
      name: 'Baratheon',
      region: 'The Stormlands',
      words: 'Ours is the Fury',
      members: [
        {
          name: 'Robert',
          isDead: true,
          status: 'king'
        },
        {
          name: 'Cersei',
          isDead: false,
          status: 'queen'
        },
        {
          name: 'Joffrey',
          isDead: true,
          status: 'king'
        },
        {
          name: 'Myrcella',
          isDead: true,
          status: 'princess'
        },
        {
          name: 'Tommen',
          isDead: false,
          status: 'king'
        },
        {
          name: 'Stannis',
          isDead: true,
          status: 'lord'
        },
        {
          name: 'Renly',
          isDead: true,
          status: 'lord'
        }
      ]
    }
  ]
}