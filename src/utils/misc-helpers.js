import get from 'lodash.get';
import curry from 'lodash.curry';
import forEach from 'lodash.foreach';

/** equalWithinPath
  takes two objects and a path.
  returns true if both objects share the same value at the given path.

  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['hello'] } }
    equalWithinPath(obj1, obj2, ['a', 'b', 0]) --> true, 'hello' === 'hello'
  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['goodbye'] } }
    equalWithinPath(obj1, obj2, ['a', 'b', 1]) --> false, 'hi' !== 'goodbye'

  @param obj1 - object
  @param obj2 - object
  @param path - array or string (string formatted as 'a.b.0')
  */
export const equalWithinPath = curry((obj1, obj2, path) => (
  get(obj1, path) === get(obj2, path)
));


/** updatedWithinPath
  takes two objects and a path.
  returns false if the path produces different results from both objects.
  the inverse of `equalWithinPath`

  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['hello'] } }
    updatedWithinPath(obj1, obj2, ['a', 'b', 0]) --> false, 'hello' === 'hello'
  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['goodbye'] } }
    updatedWithinPath(obj1, obj2, ['a', 'b', 1]) --> true, 'hi' !== 'goodbye'

  @param obj1 - object
  @param obj2 - object
  @param path - array or string (string formatted as 'a.b.0')
  */
export const updatedWithinPath = curry((obj1, obj2, path) => (
  get(obj1, path) !== get(obj2, path)
));