/**
 * Created by mikhail on 26.10.15.
 */
import express from 'express';
import path from 'path';
import graphql from './middlewares/graphql';
import {port, __HOT__} from '../../config.js'
import {getJsPath} from './utils.js';

const app = express();

if (__HOT__) {
  let webpackDevMiddleware = require('./middlewares/webpackDev');
  let webpackHotMiddleware = require('./middlewares/webpackHot');

  app.use(webpackDevMiddleware.default);
  app.use(webpackHotMiddleware);
}

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/graphql', graphql);
app.use('/assets', express.static('assets'));
app.get('*', (req, res) => {
  res.render('index', {
    jsPath: getJsPath()
  })
});

app.listen(port, () => {
  console.info(`Server started at http://localhost:${port}`);
});
