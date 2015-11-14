/**
 * Created by mikhail on 26.10.15.
 */
import React from 'react';
import {render} from 'react-dom';
import Westeros from './screens/Westeros/Westeros.jsx';
import Relay, {RootContainer, Route} from 'react-relay';
import {Viewer} from './routes.js';

require('./index.less');

if (__DEVELOPMENT__) {
  window.React = React;
}

render(
  <RootContainer route={new Viewer()} Component={Westeros} />,
  document.getElementById('app'));


