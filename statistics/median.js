/**
 * median
 **/
let countingSort = require('../sort/countingSort');
function main(numbers){
  let sorted = countingSort(numbers);
  if(sorted.length % 2 === 0){
    return (sorted[sorted.length /2 - 1] + sorted[sorted.length / 2]) / 2;
  }else{
   return  sorted[Math.floor(sorted.length / 2)]
  }
}

module.exports = main;