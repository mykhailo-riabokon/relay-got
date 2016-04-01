import webpackHotMiddleware from 'webpack-hot-middleware';
import { webpackCompiler } from './webpackDev.js';

export default webpackHotMiddleware(webpackCompiler);
