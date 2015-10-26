/**
 * Created by mikhail on 26.10.15.
 */
import express from 'express';
import path from 'path';
import {port} from '../../config.js'
import {getJsPath} from './utils.js';

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('*', (req, res) => {
  res.render('index', {
    jsPath: getJsPath()
  })
});

app.listen(port, () => {
  console.info(`Server started at http://localhost:${port}`);
});
