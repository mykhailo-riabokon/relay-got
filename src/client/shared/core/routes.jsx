// import React from 'react';
// import Relay, {Route} from 'react-relay';
// import {family, characters, regions} from './queries.js';
//
// export class FamilyRoute extends Route {
//   static routeName = 'Family';
//   static queries = {
//     family
//   }
// }
//
// export class CharactersRoute extends Route {
//   static routeName = 'Characters';
//   static queries = {
//     characters
//   }
// }
//
// export class Regions extends Route {
//   static routeName = 'Regions';
//   static queries = {
//     regions
//   }
// }

import React from 'react';
import { Route } from 'react-router';
import Westeros from '../../screens/Westeros';
import Family from '../../screens/Westeros/screens/Family';
import queries from './queries';

export default (
  <Route path="/" component={Westeros} queries={queries}>
    <Route path="family" component={Family} />
  </Route>
);
