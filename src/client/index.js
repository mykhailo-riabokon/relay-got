/**
 * Created by mikhail on 26.10.15.
 */
import React from 'react';
import {render} from 'react-dom';
import Westeros from './screens/Westeros/index.jsx';
import Relay, {RootContainer, Route} from 'react-relay';
import {Regions} from 'core/routes.js';

require('./index.less');

if (__DEVELOPMENT__) {
  window.React = React;
}

render(
  <RootContainer route={new Regions()} Component={Westeros} />,
  document.getElementById('app'));


