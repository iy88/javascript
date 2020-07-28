/**
 Average number
 **/
function main(numbers,weights){
  let alone = [];
  let weight = weights || [];
  let sum = 0;
  let weightSum = 0;
  if(weight.length === 0){
    numbers.forEach((number,index)=>{
      if(alone.indexOf(number === -1)){
        alone.push(number);
        weight[index] = 1;
      }else{
        weight[index]++;
      }
    });
  }else{
    numbers.forEach((number)=>{
      if(alone.indexOf(number === -1)) {
        alone.push(number);
      }
    });
  }
  alone.forEach((number,index)=>{
    sum += number * weight[index];
    weightSum += weight[index];
  });
  return sum / weightSum
}
module.exports = main;