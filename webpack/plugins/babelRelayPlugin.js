import getBabelRelayPlugin from 'babel-relay-plugin';
import schema from '../../src/server/graphql/schema.json';

export default getBabelRelayPlugin(schema.data);
