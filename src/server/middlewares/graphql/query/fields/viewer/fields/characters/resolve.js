/**
 * Created by mikhail on 31.10.15.
 */
export default function (rootValue, {id}) {
  let result = [
    {
      id: '1',
      familyId: '1',
      name: 'Catelyn',
      isDead: true,
      title: 'lady'
    },
    {
      id: '2',
      familyId: '1',
      name: 'Eddard',
      isDead: true,
      title: 'lord'
    },
    {
      id: '3',
      familyId: '1',
      name: 'Robb',
      isDead: true,
      title: 'lord'
    },
    {
      id: '4',
      familyId: '1',
      name: 'Sansa',
      isDead: false,
      title: 'princess'
    },
    {
      id: '5',
      familyId: '1',
      name: 'Arya',
      isDead: false,
      title: 'princess'
    },
    {
      id: '6',
      familyId: '1',
      name: 'Bran',
      isDead: false,
      title: 'prince'
    },
    {
      id: '7',
      familyId: '1',
      name: 'Rickon',
      isDead: false,
      title: 'prince'
    },

    {
      id: '8',
      familyId: '2',
      name: 'John',
      isDead: true,
      title: 'lord'
    },
    {
      id: '9',
      familyId: '2',
      name: 'Lysa',
      isDead: false,
      title: 'lady'
    },
    {
      id: '10',
      familyId: '2',
      name: 'Robin',
      isDead: false,
      title: 'lord'
    },
    {
      id: '11',
      familyId: '3',
      name: 'Hoster',
      isDead: true,
      title: 'lord'
    },
    {
      id: '12',
      familyId: '3',
      name: 'Manisa',
      isDead: true,
      title: 'lady'
    },
    {
      id: '13',
      familyId: '3',
      husbandFamilyId: '1',
      name: 'Catelyn',
      family: 'Tully'
    },
    {
      id: '14',
      familyId: '3',
      name: 'Lysa',
      husbandFamilyId: '1'
    },
    {
      id: '15',
      familyId: '3',
      name: 'Edmure',
      isDead: false,
      title: 'lord'
    },
    {
      id: '16',
      familyId: '3',
      name: 'Brynden',
      isDead: false,
      title: 'ser'
    },
    {
      id: '17',
      familyId: '4',
      name: 'Tywin',
      isDead: true,
      title: 'lord'
    },
    {
      id: '18',
      familyId: '4',
      name: 'Joanna',
      isDead: true,
      title: 'lady'
    },
    {
      id: '19',
      familyId: '4',
      name: 'Cersei',
      husbandFamilyId: '6'
    },
    {
      id: '20',
      familyId: '4',
      name: 'Jaime',
      isDead: false,
      title: 'ser'
    },
    {
      id: '21',
      familyId: '4',
      name: 'Tyrion',
      isDead: false,
      title: null
    },
    {
      id: '22',
      familyId: '5',
      name: 'Balon',
      isDead: false,
      title: 'lord'
    },
    //{
    //  id: '23',
    //  familyId: '5',
    //  name: 'Alannys',
    //  husbandHouse: 'Harlaw',
    //  family: 'Greyjoy'
    //},
    {
      id: '24',
      familyId: '5',
      name: 'Rodrik',
      isDead: true,
      title: null
    },
    {
      id: '25',
      familyId: '5',
      name: 'Maron',
      isDead: true,
      title: null
    },
    {
      id: '26',
      familyId: '5',
      name: 'Yara',
      isDead: false,
      title: null
    },
    {
      id: '27',
      familyId: '5',
      name: 'Theon',
      isDead: false,
      title: null
    },
    {
      id: '28',
      familyId: '6',
      name: 'Robert',
      isDead: true,
      status: 'king'
    },
    {
      id: '29',
      familyId: '6',
      name: 'Cersei',
      isDead: false,
      status: 'queen'
    },
    {
      id: '30',
      familyId: '6',
      name: 'Joffrey',
      isDead: true,
      status: 'king'
    },
    {
      id: '31',
      familyId: '6',
      name: 'Myrcella',
      isDead: true,
      status: 'princess'
    },
    {
      id: '32',
      familyId: '6',
      name: 'Tommen',
      isDead: false,
      status: 'king'
    },
    {
      id: '33',
      familyId: '6',
      name: 'Stannis',
      isDead: true,
      status: 'lord'
    },
    {
      id: '34',
      familyId: '6',
      name: 'Renly',
      isDead: true,
      status: 'lord'
    }
  ];

  if (id) {
    result = result.filter(character => character.id === id);
  }

  return result;
}
