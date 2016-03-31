import character from './character';
import family from './family';
import region from './region';

export default {
  ...character.queries,
  ...family.queries,
  ...region.queries,
}
