/**
 * Created by mikhail on 09.11.15.
 */
import React from 'react';
import {Route} from 'react-relay';
import {viewer} from './queries.js';

export class Viewer extends Route {
  static routeName = 'Viewer';
  static queries = {
    viewer
  };
}
