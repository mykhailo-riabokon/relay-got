/**
 * Created by mikhail on 31.10.15.
 */
import data from '../../../../../data/families.js';

export default function (rootValue, args) {
  let filterKeys = Object.keys(args);
  let result = {};

  if (filterKeys.length) {
    filterKeys.forEach(key => {
      result = data.find(family => {
        return family[key] === args[key];
      });
    });
  }

  return result;
}

