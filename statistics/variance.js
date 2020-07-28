/*
 * variance
 */
const average = require('./average');
function main(numbers){
  let sum = 0;
  let a = average(numbers);
  numbers.forEach((number)=>{
    sum += (number - a) *(number - a);
  })
  return sum / numbers.length
}

module.exports = main;