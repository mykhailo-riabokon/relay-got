/**
 * Created by mikhail on 19.11.15.
 */
import {nodeDefinitions, fromGlobalId} from 'graphql-relay';

let {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);

    return {type, id};
  }
);

export {nodeInterface, nodeField};
