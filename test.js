import test from 'ava';
import approximatelyEqual from './index.es5';

test('should be approximately equal', t => {
  t.true(approximatelyEqual(100.5, 100.4, 0.1));
  t.true(approximatelyEqual(100.5, 100.5, 0.1));
  t.true(approximatelyEqual(100.5, 100.6, 0.1));
});

test('should be not equal', t => {
  t.false(approximatelyEqual(100.5, 100.7, 0.1));
  t.false(approximatelyEqual(100.5, 100.3, 0.1));
});
