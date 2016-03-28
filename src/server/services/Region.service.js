import regions from '../data/regions';

const RegionService = {
  getRegion({ id }) {
    return id ? regions.toJS() : [];
  }
}

export default RegionService;
