import approximatelyEqual from './index';
import assert from 'assert';

it('should be approximately equal', () => {
  assert(approximatelyEqual(100.5, 100.6, 0.1));
  assert(approximatelyEqual(100.5, 100.4, 0.1));
  assert(approximatelyEqual(100.5, 100.5, 0.1));
});

it('should be not equal', () => {
  assert(!approximatelyEqual(100.5, 100.7, 0.1));
  assert(!approximatelyEqual(100.5, 100.3, 0.1));
});
