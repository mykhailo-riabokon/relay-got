/**
 * Created by mikhail on 26.10.15.
 */
import React from 'react';
import {render} from 'react-dom';
import Westeros from './screens/Westeros/relayContainer.js';
import Relay, {RootContainer, Route} from 'react-relay';

require('./index.less');

if (__DEVELOPMENT__) {
  window.React = React;
}

class WesterosRoute extends Route {
  static routeName = 'Regions';
  static queries = {
    viewer: () => Relay.QL`query { viewer }`
  };
}

render(
  <RootContainer route={new WesterosRoute()} Component={Westeros} />,
  document.getElementById('app'));


