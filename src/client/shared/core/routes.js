/**
 * Created by mikhail on 09.11.15.
 */
import React from 'react';
import Relay, {Route} from 'react-relay';
import {viewer, family, members, regions} from './queries.js';

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

export class MembersRoute extends Route {
  static routeName = 'Members';
  static queries = {
    members
  }
}

export class Regions extends Route {
  static routeName = 'Regions';
  static queries = {
    regions
  }
}
