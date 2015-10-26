/**
 * Created by mikhail on 26.10.15.
 */
import {isProduction, jsOutputPath} from '../../config.js';
import * as helpers from './helpers.js';

let config = {
  entry: helpers.getEntries(),
  output: {
    path: jsOutputPath,
    filename: 'app.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: helpers.getLoaders()
  },
  plugins: helpers.getPlugins(),
  progress: true,
  resolve: {
    //modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx']
  }
};

if (!isProduction) {
  config.devtool = 'eval-source-map';
}

export default config;