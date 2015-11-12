/**
 * Created by mikhail on 31.10.15.
 */
import {GraphQLList} from 'graphql';
import type from './type.js';
import resolve from './resolve.js';
import args from './args.js';

export default {
  args,
  type: new GraphQLList(type),
  resolve
}
