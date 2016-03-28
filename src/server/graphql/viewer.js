import {GraphQLObjectType} from 'graphql';
import character from './character';

export default new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    ...character.queries,
  }),
  resolve() {
    console.log('asdasdas');

    return {}
  }
})
