import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

const nodes = {};

function registerNodeGetters(type, getter) {
  if (!nodes[type]) {
    nodes[type] = getter;
  }
}

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId, info) => {
    const { type, id } = fromGlobalId(globalId);

    return nodes[type](id, info);
  }
);

export { nodeInterface, nodeField, registerNodeGetters };
