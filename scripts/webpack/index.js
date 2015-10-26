/**
 * Created by mikhail on 26.10.15.
 */
import webpack from 'webpack';
import config from './config.js';

const runner = webpack(config);

console.info('Webpack started');
runner.run(() => {
  console.info('Webpack finished');
});