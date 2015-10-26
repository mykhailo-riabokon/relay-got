/**
 * Created by mikhail on 26.10.15.
 */
import webpackHotMiddleware from 'webpack-hot-middleware';
import {webpackCompiler} from './webpackDev.js';

export default webpackHotMiddleware(webpackCompiler);
