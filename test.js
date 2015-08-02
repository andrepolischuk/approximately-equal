import approximatelyEqual from './index';
import assert from 'assert';

it('should be approximately equal', () => {
  assert(approximatelyEqual(100.05, 100.06, 0.01));
  assert(approximatelyEqual(100.05, 100.04, 0.01));
  assert(approximatelyEqual(100.05, 100.05, 0.01));
});

it('should be not equal', () => {
  assert(!approximatelyEqual(100.05, 100.07, 0.01));
  assert(!approximatelyEqual(100.05, 100.03, 0.01));
});
