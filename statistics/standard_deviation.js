/*
 * standard deviation
 */

const variance = require('./variance');
function main(numbers){
  return Math.sqrt(variance(numbers));
}

module.exports = main;