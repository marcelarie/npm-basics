const lodash = require('lodash');

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  // TODO implement
}

function getIndexOf(array, value) {
  // TODO implement
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
