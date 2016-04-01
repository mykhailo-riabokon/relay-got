import React from 'react';
import { Route } from 'react-router';
import Westeros from '../../screens/Westeros';
import Region from '../../screens/Westeros/screens/Region';
import queries from './queries';

export default (
  <Route path="/" component={Westeros} queries={queries}>
    <Route path="region" component={Region} queryParams={['regionId']} queries={queries} />
  </Route>
);
