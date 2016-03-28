import React from 'react';
import Relay, {Route} from 'react-relay';
import {family, characters, regions} from './queries.js';

export class FamilyRoute extends Route {
  static routeName = 'Family';
  static queries = {
    family
  }
}

export class CharactersRoute extends Route {
  static routeName = 'Characters';
  static queries = {
    characters
  }
}

export class Regions extends Route {
  static routeName = 'Regions';
  static queries = {
    regions
  }
}
