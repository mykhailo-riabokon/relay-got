/**
 * Created by mikhail on 03.11.15.
 */
import getBabelRelayPlugin from 'babel-relay-plugin';
import schema from '../../src/server/middlewares/graphql/schema.json';

export default getBabelRelayPlugin(schema.data);
