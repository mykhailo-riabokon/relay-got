import React from 'react';
import { render } from 'react-dom';
import { RelayRouter } from 'react-router-relay';
import { browserHistory } from 'react-router'
import routes from 'core/routes';
import './index.less';

render(
  <RelayRouter history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
