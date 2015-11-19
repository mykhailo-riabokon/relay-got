/**
 * Created by mikhail on 31.10.15.
 */
import {GraphQLSchema} from 'graphql';
import root from './queries/root.js';

export default new GraphQLSchema({
  query: root
});
