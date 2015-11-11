/**
 * Created by mikhail on 09.11.15.
 */
import React from 'react';
import Relay, {Route} from 'react-relay';
import {viewer, family} from './queries.js';

export class Viewer extends Route {
  static routeName = 'Viewer';
  static queries = {
    viewer
  };
}

export class FamilyRoute extends Route {
  static routeName = 'Family';
  static queries = {
    family
  }
}
