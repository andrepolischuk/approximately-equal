import EPSILON from 'number-epsilon';

export default function approximatelyEqual(a, b, error = 0) {
  return Math.abs(a - b) - error < EPSILON;
}
