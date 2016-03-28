import {GraphQLObjectType} from 'graphql';
import character from './character';
import family from './family';
import region from './region';

export default new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    ...character.queries,
    ...family.queries,
    ...region.queries,
  })
})
