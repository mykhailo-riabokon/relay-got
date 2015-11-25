import Immutable from 'immutable';

const originData = Immutable.fromJS([
  {
    id: '1_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Catelyn Stark',
    isDead: true,
    title: 'lady',
    photo: '/assets/images/characters/catelyn-stark-512x512.jpg'
  },
  {
    id: '2_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Eddard Stark',
    isDead: true,
    title: 'lord',
    photo: '/assets/images/characters/eddard-ned-stark-512x512.jpg'
  },
  {
    id: '3_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Robb Stark',
    isDead: true,
    title: 'lord',
    photo: '/assets/images/characters/robert-stark-512x512.jpg'
  },
  {
    id: '4_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Sansa Stark',
    isDead: false,
    title: 'princess',
    photo: '/assets/images/characters/sansa-stark-160.jpg'
  },
  {
    id: '5_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Arya Stark',
    isDead: false,
    title: 'princess',
    photo: '/assets/images/characters/arya-stark-512x512.jpg'
  },
  {
    id: '6_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Bran Stark',
    isDead: false,
    title: 'prince',
    photo: '/assets/images/characters/bran-stark-512x512.jpg'
  },
  {
    id: '7_character',
    type: 'character',
    familyId: '1_family',
    regionId: '1_region',
    name: 'Rickon Stark',
    isDead: false,
    title: 'prince',
    photo: '/assets/images/characters/rickon-stark-512x512.jpg'
  },
  {
    id: '8_character',
    type: 'character',
    familyId: '2_family',
    regionId: '2_region',
    name: 'John Arryn',
    isDead: true,
    title: 'lord',
    photo: null
  },
  {
    id: '9_character',
    type: 'character',
    familyId: '2_family',
    regionId: '2_region',
    name: 'Lysa Arryn',
    isDead: false,
    title: 'lady',
    photo: '/assets/images/characters/lysa-arryn-512x512.jpg'
  },
  {
    id: '10_character',
    type: 'character',
    familyId: '2_family',
    regionId: '2_region',
    name: 'Robin Arryn',
    isDead: false,
    title: 'lord',
    photo: '/assets/images/characters/robyn-arryn-512x512.jpg'
  },
  {
    id: '11_character',
    type: 'character',
    familyId: '3_family',
    regionId: '3_region',
    name: 'Hoster Tully',
    isDead: true,
    title: 'lord',
    photo: null
  },
  {
    id: '12_character',
    type: 'character',
    familyId: '3_family',
    regionId: '3_region',
    name: 'Manisa Tully',
    isDead: true,
    title: 'lady',
    photo: null
  },
  {
    id: '15_character',
    type: 'character',
    familyId: '3_family',
    regionId: '3_region',
    name: 'Edmure Tully',
    isDead: false,
    title: 'lord',
    photo: null
  },
  {
    id: '16_character',
    type: 'character',
    familyId: '3_family',
    regionId: '3_region',
    name: 'Brynden Tully',
    isDead: false,
    title: 'ser',
    photo: '/assets/images/characters/blackfish-tully-512x512.jpg'
  },
  {
    id: '17_character',
    type: 'character',
    familyId: '4_family',
    regionId: '8_region',
    name: 'Tywin Lannister',
    isDead: true,
    title: 'lord',
    photo: '/assets/images/characters/tywin-lannister-512x512.jpg'
  },
  {
    id: '18_character',
    type: 'character',
    familyId: '4_family',
    regionId: '8_region',
    name: 'Joanna Lannister',
    isDead: true,
    title: 'lady',
    photo: null
  },
  {
    id: '20_character',
    type: 'character',
    familyId: '4_family',
    regionId: '4_region',
    name: 'Jaime Lannister',
    isDead: false,
    title: 'ser',
    photo: '/assets/images/characters/jamie-lannister-512x512.jpg'
  },
  {
    id: '21_character',
    type: 'character',
    familyId: '4_family',
    regionId: '4_region',
    name: 'Tyrion Lannister',
    isDead: false,
    title: null,
    photo: '/assets/images/characters/tyrion-lannister-512x512.jpg'
  },
  {
    id: '22_character',
    type: 'character',
    familyId: '5_family',
    regionId: '5_region',
    name: 'Balon Greyjoy',
    isDead: false,
    title: 'lord',
    photo: '/assets/images/characters/balon-greyjoy-512x512.jpg'
  },
  {
    id: '24_character',
    type: 'character',
    familyId: '5_family',
    regionId: '5_region',
    name: 'Rodrik Greyjoy',
    isDead: true,
    title: null,
    photo: null
  },
  {
    id: '25_character',
    type: 'character',
    familyId: '5_family',
    regionId: '5_region',
    name: 'Maron Greyjoy',
    isDead: true,
    title: null,
    photo: null
  },
  {
    id: '26_character',
    type: 'character',
    familyId: '5_family',
    regionId: '5_region',
    name: 'Yara Greyjoy',
    isDead: false,
    title: null,
    photo: '/assets/images/characters/yara-greyjoy-512x512.jpg'
  },
  {
    id: '27_character',
    type: 'character',
    familyId: '5_family',
    regionId: '5_region',
    name: 'Theon Greyjoy',
    isDead: false,
    title: null,
    photo: '/assets/images/characters/theon-greyjoy-512x512.jpg'
  },
  {
    id: '28_character',
    type: 'character',
    familyId: '6_family',
    regionId: '6_region',
    name: 'Robert Baratheon',
    isDead: true,
    status: 'king',
    photo: '/assets/images/characters/robert-baratheon-512x512.jpg'
  },
  {
    id: '29_character',
    type: 'character',
    familyId: '6_family',
    regionId: '6_region',
    name: 'Cersei Baratheon',
    isDead: false,
    status: 'queen',
    photo: '/assets/images/characters/cersei-lannister-512x512.jpg'
  },
  {
    id: '30_character',
    type: 'character',
    familyId: '6_family',
    regionId: '6_region',
    name: 'Joffrey Baratheon',
    isDead: true,
    status: 'king',
    photo: '/assets/images/characters/joffrey-512x512.jpg'
  },
  {
    id: '31_character',
    type: 'character',
    familyId: '6_family',
    regionId: '6_region',
    name: 'Myrcella Baratheon',
    isDead: true,
    status: 'princess',
    photo: '/assets/images/characters/myrcella-baratheon-512x512.jpg'
  },
  {
    id: '32_character',
    type: 'character',
    familyId: '6_family',
    regionId: '6_region',
    name: 'Tommen Baratheon',
    isDead: false,
    status: 'king',
    photo: '/assets/images/characters/tommon-baratheon-512x512.jpg'
  },
  {
    id: '33_character',
    type: 'character',
    familyId: '6_family',
    regionId: '6_region',
    name: 'Stannis Baratheon',
    isDead: true,
    status: 'lord',
    photo: '/assets/images/characters/stannis-512x512.jpg'
  },
  {
    id: '34_character',
    type: 'character',
    familyId: '6_family',
    regionId: '7_region',
    name: 'Renly Baratheon',
    isDead: true,
    status: 'lord',
    photo: '/assets/images/characters/renly-baratheon-512x512.jpg'
  },
  {
    id: '35_character',
    type: 'character',
    familyId: null,
    regionId: '6_region',
    name: 'Petyr Baelish',
    isDead: false,
    status: 'lord',
    photo: '/assets/images/characters/petyr-baelish-512x512.jpg'
  },
  {
    id: '36_character',
    type: 'character',
    familyId: null,
    regionId: '7_region',
    name: 'Brienne of Tarth',
    isDead: false,
    status: null,
    photo: '/assets/images/characters/brienne-of-tarth-512x512.jpg'
  },
  {
    id: '37_character',
    type: 'character',
    familyId: null,
    regionId: '6_region',
    name: 'Bronn',
    isDead: false,
    status: null,
    photo: '/assets/images/characters/bronn-512x512.jpg'
  },
  {
    id: '37_character',
    type: 'character',
    familyId: null,
    regionId: '10_region',
    name: 'Mance Rayder',
    isDead: true,
    status: 'King Beyond The Wall',
    photo: '/assets/images/characters/mance-rayder-512x512.jpg'
  },
  {
    id: '38_character',
    type: 'character',
    familyId: null,
    regionId: '1_region',
    name: 'Jon Snow',
    isDead: true,
    status: 'Lord Commander of Night Watch',
    photo: '/assets/images/characters/john-snow-512x512.jpg'
  },
  {
    id: '39_character',
    type: 'character',
    familyId: null,
    regionId: '1_region',
    name: 'Ramsey Snow',
    isDead: false,
    status: 'Castellan of The Dreadfort',
    photo: '/assets/images/characters/ramsay-512x512.jpg'
  },
  {
    id: '40_character',
    type: 'character',
    familyId: null,
    regionId: '1_region',
    name: 'Samwell Tarly',
    isDead: false,
    status: null,
    photo: '/assets/images/characters/samwell-512x512.jpg'
  },
  {
    id: '41_character',
    type: 'character',
    familyId: null,
    regionId: '10_region',
    name: 'Tormund',
    isDead: false,
    status: null,
    photo: '/assets/images/characters/tormund-512x512.jpg'
  },
  {
    id: '42_character',
    type: 'character',
    familyId: null,
    regionId: '10_region',
    name: 'Orell',
    isDead: false,
    status: null,
    photo: '/assets/images/characters/orell-512x512.jpg'
  },
  {
    id: '43_character',
    type: 'character',
    familyId: null,
    regionId: '10_region',
    name: 'Ygritte',
    isDead: false,
    status: null,
    photo: '/assets/images/characters/ygritte-512x512.jpg'
  }
]);

let data = Immutable.fromJS(originData.toJS());

export function getData() {
  return data.toJS();
}

export function reviveCharacter(id) {
  let index = data.findIndex(item => item.get('id') === id);
  let character = data.get(index);

  character = character.set('isDead', false);

  data = data.set(index, character);

  return data;
}
