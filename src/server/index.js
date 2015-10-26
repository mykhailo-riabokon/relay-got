/**
 * Created by mikhail on 26.10.15.
 */
import express from 'express';
import {port} from '../../config.js'

const app = express();

app.listen(port, () => {
  console.info(`Server started at http://localhost:${port}`);
});
