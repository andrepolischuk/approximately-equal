# approximately-equal [![Build Status][travis-image]][travis-url]

> Check if two numbers are approximately equal

## Install

```sh
npm install --save approximately-equal
```

## Usage

```js
import approximatelyEqual from 'approximately-equal';

approximatelyEqual(100.5, 101, 0.1); // false
approximatelyEqual(100.5, 100.6, 0.1); // true
```

## API

### approximatelyEqual(actual, expected[, error])

#### actual

Type: `number`

Actual value.

#### expected

Type: `number`

Expected value.

#### error

Type: `number`  
Default: `0`

Approximation error.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/approximately-equal
[travis-image]: https://travis-ci.org/andrepolischuk/approximately-equal.svg?branch=master
