/**
 * Created by mikhail on 31.10.15.
 */
import data from '../../../../../../../data/regions.js';

export default function (rootValue, {id}) {
  let result = data;

  if (id) {
    result = result.filter(region => region.id === id);
  }

  return result;
}
