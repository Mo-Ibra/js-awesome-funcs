'use strict';

require('mocha');

const assert = require('assert');

const { isOdd, isEven } = require('./');

describe('isOdd', function() {
  it('should return true if the number is odd:', function() {
    assert(!isOdd(0));
    assert(!isOdd(2));
    assert(isOdd(1));
    assert(isOdd(3));
    assert(isOdd(-1));
    assert(isOdd(-3));
    assert(isOdd(1.0e0));
    assert(isOdd(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isOdd('0'));
    assert(!isOdd('2'));
    assert(isOdd('1'));
    assert(isOdd('3'));
    assert(isOdd('1.0e0'));
    assert(isOdd('9007199254740991'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isOdd(), /expected a number/);
    assert.throws(() => isOdd('foo'), /expected a number/);
    assert.throws(() => isOdd('1.1e0'), /expected an integer/);
    assert.throws(() => isOdd('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});

describe('isEven', function() {
  it('should return true if the number is even', function() {
    assert(!isEven(1));
    assert(!isEven(3));
    assert(isEven(2));
    assert(isEven(4));
    assert(isEven(-2));
    assert(isEven(-4));
    assert(isEven(2.0e0));
  });

  it('should work with strings', function() {
    assert(!isEven('1'));
    assert(!isEven('3'));
    assert(isEven('2'));
    assert(isEven('4'));
    assert(isEven('2.0e0'));
  });

  it('should return an error if an invalid value is passed', function() {
    assert.throws(() => isEven(), /expected a number/)
    assert.throws(() => isEven('String', /expected a number/))
    assert.throws(() => isEven('2.1e0'), /expected an integer/);
    assert.throws(() => isEven('9007199254740992'), /value exceeds maximum safe integer/);
  });
});

