/**
 * Created by mikhail on 26.10.15.
 */
import React from 'react';
import {render} from 'react-dom';
import Westeros from './screens/Westeros/index.jsx';

require('./index.less');

if (__DEVELOPMENT__) {
  window.React = React;
}

render(<Westeros />, document.getElementById('app'));


