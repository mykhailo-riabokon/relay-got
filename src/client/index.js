/**
 * Created by mikhail on 26.10.15.
 */
import React from 'react';
import {render} from 'react-dom';

if (__DEVELOPMENT__) {
  window.React = React;
}

render(<h1>App</h1>, document.getElementById('app'));


