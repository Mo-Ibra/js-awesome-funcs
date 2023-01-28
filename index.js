/*!
 * js-funcs <>
 *
 * Copyright (c) 2023, Mohamed Ibrahim (Mo-Ibra).
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

/**
 * 
 * @param {Number} value
 * @returns Boolean
 * true if number is odd
 * false if number is even
*/
function isOdd(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('value exceeds maximum safe integer');
  }
  return (n % 2) === 1;
};

/**
 * 
 * @param {Number} value 
 * @returns Boolean
 * true if number is even
 * false if number is odd
*/
function isEven(value) {
  return !isOdd(value);
}

/**
 * 
 * @param {Number | String} searchValue 
 * @param {String | Array} target 
 * @returns count
 */
function count(searchValue, target) {

  let count = 0;

  if (typeof target === "object"
    && Array.isArray(target)
    && target instanceof Array) {
    target.forEach(item => {
      if (item == searchValue) {
        count++;
      }
    });

    return count;

  } else if (typeof target === "string") {

    let toArray = target.split("");

    toArray.forEach(item => {
      if (item == searchValue) {
        count++;
      }
    });

    return count;
  } else {
    throw new TypeError('expected an array or string');
  }
}

/**
 * 
 * @param {String} searchValue 
 * @param {Object} object 
 * @returns 
 */
function hasAttr(searchValue, object) {
  if (typeof searchValue !== "string") throw new Error("Expected an string");
  if (typeof object === "object" && object instanceof Object && !Array.isArray(object)) {
    return object.hasOwnProperty(searchValue);
  } else {
    throw new Error("Expected an object");
  }
}

/**
 * 
 * @param {String} searchValue 
 * @param {Object} object 
 * @param {String} defaultMsg 
 * @returns 
 */
function getAttr(searchValue, object, defaultMsg) {
  if (typeof searchValue !== "string") throw new Error("Expected an string");
  if (typeof object === "object" && object instanceof Object && !Array.isArray(object)) {
    if (defaultMsg && object[searchValue] === undefined) {
      if (typeof defaultMsg == "string") {
          return defaultMsg;
      } else {
        throw new Error("Expected an string");
      }
    }
    return object[searchValue];
  } else {
    throw new Error("Expected an object");
  }
}

module.exports = {
  isOdd,
  isEven,
  count,
  hasAttr,
  getAttr,
}