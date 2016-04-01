import { __PRODUCTION__, clientOutputPath } from '../config.js';
import * as helpers from './helpers.js';

const config = {
  entry: helpers.getEntries(),
  output: {
    path: clientOutputPath,
    filename: 'app.js',
    publicPath: '/assets/js/'
  },
  module: {
    loaders: helpers.getLoaders(),
  },
  plugins: helpers.getPlugins(),
  babel: helpers.getBabelConfig(),
  progress: true,
  resolve: {
    modulesDirectories: ['node_modules', './src/client/shared'],
    extensions: ['', '.js', '.jsx']
  }
};

if (!__PRODUCTION__) {
  config.devtool = 'eval-source-map';
}

export default config;
