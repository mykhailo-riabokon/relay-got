/**
 * Created by mikhail on 26.10.15.
 */
require('babel/register')({
  stage: 0
});

global.__DEVELOPMENT__ = (process.env.NODE_ENV === 'development');

require('./src/server/index');
