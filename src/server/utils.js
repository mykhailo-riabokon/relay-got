/**
 * Created by mikhail on 26.10.15.
 */
import {__DEVELOPMENT__, port} from '../../config.js';

export function getJsPath() {
  let path = '/assets/js/app.js';

  if (__DEVELOPMENT__) {
    path = `http://localhost:${port}${path}`;
  }

  return path;
}