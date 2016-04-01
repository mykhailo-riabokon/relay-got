import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../../../webpack/config.js';

const compiler = webpack(config);

export default webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
});

// for commonjs import reason;
export const webpackCompiler = compiler;
