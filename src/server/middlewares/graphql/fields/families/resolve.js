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
          title: 'lord',
          family: 'Stark'
        },
        {
          name: 'Catelyn',
          isDead: true,
          title: 'lady',
          family: 'Stark'
        },
        {
          name: 'Robb',
          isDead: true,
          title: 'lord',
          family: 'Stark'
        },
        {
          name: 'Sansa',
          isDead: false,
          title: 'princess',
          family: 'Stark'
        },
        {
          name: 'Arya',
          isDead: false,
          title: 'princess',
          family: 'Stark'
        },
        {
          name: 'Bran',
          isDead: false,
          title: 'prince',
          family: 'Stark'
        },
        {
          name: 'Rickon',
          isDead: false,
          title: 'prince',
          family: 'Stark'
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
          title: 'lord',
          family: 'Arryn'
        },
        {
          name: 'Lysa',
          isDead: false,
          title: 'lady',
          family: 'Arryn'
        },
        {
          name: 'Robin',
          isDead: false,
          title: 'lord',
          family: 'Arryn'
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
          title: 'lord',
          family: 'Tully'
        },
        {
          name: 'Manisa',
          isDead: true,
          title: 'lady',
          family: 'Tully'
        },
        {
          name: 'Catelyn',
          family: 'Tully',
          husbandHouse: 'Stark'
        },
        {
          name: 'Lysa',
          family: 'Tully',
          husbandHouse: 'Stark'
        },
        {
          name: 'Edmure',
          isDead: false,
          title: 'lord',
          family: 'Tully'
        },
        {
          name: 'Brynden',
          isDead: false,
          title: 'ser',
          family: 'Tully'
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
          title: 'lord',
          family: 'Lannister'
        },
        {
          name: 'Joanna',
          isDead: true,
          title: 'lady',
          family: 'Lannister'
        },
        {
          name: 'Cersei',
          husbandHouse: 'Baratheon',
          family: 'Lannister'
        },
        {
          name: 'Jaime',
          isDead: false,
          title: 'ser',
          family: 'Lannister'
        },
        {
          name: 'Tyrion',
          isDead: false,
          title: null,
          family: 'Lannister'
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
          title: 'lord',
          family: 'Greyjoy'
        },
        {
          name: 'Alannys',
          husbandHouse: 'Harlaw',
          family: 'Greyjoy'
        },
        {
          name: 'Rodrik',
          isDead: true,
          title: null,
          family: 'Greyjoy'
        },
        {
          name: 'Maron',
          isDead: true,
          title: null,
          family: 'Greyjoy'
        },
        {
          name: 'Yara',
          isDead: false,
          title: null,
          family: 'Greyjoy'
        },
        {
          name: 'Theon',
          isDead: false,
          title: null,
          family: 'Greyjoy'
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
          status: 'king',
          family: 'Baratheon'
        },
        {
          name: 'Cersei',
          isDead: false,
          status: 'queen',
          family: 'Baratheon'
        },
        {
          name: 'Joffrey',
          isDead: true,
          status: 'king',
          family: 'Baratheon'
        },
        {
          name: 'Myrcella',
          isDead: true,
          status: 'princess',
          family: 'Baratheon'
        },
        {
          name: 'Tommen',
          isDead: false,
          status: 'king',
          family: 'Baratheon'
        },
        {
          name: 'Stannis',
          isDead: true,
          status: 'lord',
          family: 'Baratheon'
        },
        {
          name: 'Renly',
          isDead: true,
          status: 'lord',
          family: 'Baratheon'
        }
      ]
    }
  ]
}