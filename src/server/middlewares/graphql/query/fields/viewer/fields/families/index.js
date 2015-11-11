/**
 * Created by mikhail on 31.10.15.
 */
import {GraphQLList} from 'graphql';
import type from '../../../family/type.js';
import resolve from './resolve.js';

export default {
  type: new GraphQLList(type),
  resolve
}
