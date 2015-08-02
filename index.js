import EPSILON from 'number-epsilon';

export default (a, b, error = 0) => {
  error += EPSILON;
  return a >= b - error && a <= b + error;
};
