/**
 * Created by mikhail on 26.10.15.
 */
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../../../scripts/webpack/config.js';

const compiler = webpack(config);

export default webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

// for commonjs import reason;
export const webpackCompiler = compiler;