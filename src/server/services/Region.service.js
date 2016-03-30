import regions from '../data/regions';

const RegionService = {
  getRegions() {
    return regions.toJS();
  }
};

export default RegionService;
