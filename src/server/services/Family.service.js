import families from '../data/families';

const FamilyService = {
  getFamilies({ familyId }) {
    return familyId ? families.toJS() : [];
  }
}

export default FamilyService;
