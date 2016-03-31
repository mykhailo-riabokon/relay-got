import families from '../data/families';

const FamilyService = {
  getFamily(regionId) {
    let result = null;

    if (regionId) {
      result = families.find(family => family.get('regionId') === regionId);
      result = result && result.toJS();
    }

    return result;
  }
}

export default FamilyService;
