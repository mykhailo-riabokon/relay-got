import characters from '../data/characters';

const CharecterService = {
  getCharecters({ regionId }) {
    return regionId ? characters.toJS() : [];
  },
};

export default CharecterService;
