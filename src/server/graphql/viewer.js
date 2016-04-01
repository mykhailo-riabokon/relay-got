import { GraphQLObjectType } from 'graphql';
import { nodeInterface, registerNodeGetters } from './init';
import { globalIdField } from 'graphql-relay';
import queries from './queries';

const VIEWER_INSTANCE = { id: '' };
const VIEWER_NAME = 'Viewer';
registerNodeGetters(VIEWER_NAME, () => VIEWER_INSTANCE);

export default {
  type: new GraphQLObjectType({
    name: VIEWER_NAME,
    isTypeOf: obj => obj === VIEWER_INSTANCE,
    fields: () => ({
      id: globalIdField(VIEWER_NAME),
      ...queries,
    }),
    interfaces: () => [nodeInterface],
  }),
  resolve: () => VIEWER_INSTANCE,
};
