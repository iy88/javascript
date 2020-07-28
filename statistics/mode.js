/**
 * mode
 */

Array.prototype.searchelement = function (element, auto, begin_index, end_index) {
  let indexs = [];
  if (auto === true) {
    for (let index = 0; index < this.length; index++) {
      if (this[index] === element) {
        indexs[indexs.length] = index;
      }
    }
  } else if (auto === false) {
    for (let index = begin_index; index < end_index; index++) {
      if (this[index] === element) {
        indexs[indexs.length] = index;
      }
    }
  } else {
    console.error("search element error");
  }
  return indexs
}

function main(numbers){
  let alone = [];
  let each = [];
  let modes = [];
  numbers.forEach((number)=>{
    if(alone.indexOf(number) === -1){
      alone.push(number);
    }
  });
  alone.forEach((number)=>{
    each.push(numbers.searchelement(number,true).length);
  });
  each.searchelement(Math.max(...each),true).forEach((index)=>{
    modes.push(alone[index]);
  })
  return modes;
}
module.exports = main;