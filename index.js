import EPSILON from 'number-epsilon';
export default (a, b, error = 0) => Math.abs(a - b) - error < EPSILON;
