import characters from '../data/characters';

const CharecterService = {
  getCharecters(regionId) {
    let result = [];

    if (regionId) {
      result = characters.filter(character => character.get('regionId') === regionId);
      result = result && result.toJS();
    }

    return result;
  },
};

export default CharecterService;
