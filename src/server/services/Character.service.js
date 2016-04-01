import characters from '../data/characters';

let data = characters.set();

const CharecterService = {
  getCharecters(regionId) {
    let result = [];

    if (regionId) {
      result = data.filter(character => character.get('regionId') === regionId);
      result = result && result.toJS();
    }

    return result;
  },
  toggleCharacter(id, kill) {
    const index = data.findIndex(item => item.get('id') === id);
    const character = data.get(index).set('isDead', kill);

    data = data.set(index, character);

    return {};
  }
};

export default CharecterService;
