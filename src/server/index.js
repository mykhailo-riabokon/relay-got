import express from 'express';
import graphql from './middlewares/graphql';
import initialPage from './middlewares/initialPage';
import { port, __HOT__ } from '../../config.js';

const app = express();

if (__HOT__) {
  const webpackDevMiddleware = require('./middlewares/webpackDev');
  const webpackHotMiddleware = require('./middlewares/webpackHot');

  app.use(webpackDevMiddleware.default);
  app.use(webpackHotMiddleware.default);
}

app.use('/graphql', graphql);
app.use('/assets', express.static('assets'));
app.get('*', initialPage());

app.listen(port, () => {
  /* eslint no-console: 0 */

  console.info(`Server started at http://localhost:${port}`);
});
