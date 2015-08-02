# approximately-equal [![Build Status][travis-image]][travis-url]

  > Check if two numbers are approximately equal

## Install

```sh
npm install --save approximately-equal
```

## Usage

```js
var approximatelyEqual = require('approximately-equal');

approximatelyEqual(100.05, 100.1, 0.01); // false
approximatelyEqual(100.05, 100.06, 0.01); // true
```

## API

### approximatelyEqual(a, b, error)

  Check if `a` equal to `b` with approximation `error`

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/approximately-equal
[travis-image]: https://travis-ci.org/andrepolischuk/approximately-equal.svg?branch=master
