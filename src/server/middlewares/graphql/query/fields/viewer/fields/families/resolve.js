/**
 * Created by mikhail on 31.10.15.
 */
import data from '../../../../../../../data/families.js';

export default function (rootValue, args) {
  let filterKeys = Object.keys(args);
  let result = data;

  if (filterKeys.length) {
    result = filterKeys.reduce((memo, filterKey) => {
      return memo.concat(result.filter(family => {
        return family[filterKey] === args[filterKey]
      }));
    }, []);
  }

  return result;
}
