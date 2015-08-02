import EPSILON from 'number-epsilon';

export default (a, b, error = 0) => {
  const diff = Math.abs(a - b);
  return diff >= 0 && diff - error < EPSILON;
};
