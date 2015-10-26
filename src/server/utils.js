/**
 * Created by mikhail on 26.10.15.
 */
import {__PRODUCTION__, port} from '../../config.js';

export function getJsPath() {
  let path = `http://localhost/${port}/assets/app.js`;

  if (__PRODUCTION__) {
    path = '/assets/js/app.js';
  }

  return path;
}