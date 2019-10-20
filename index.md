---
layout: default
---

This web page about algorithm and Data structures(such as: _**Stack**_,_**bubbleSort**_,_**radixSort**_...).

[sort algorithm](sort "sort algorithm")



# bubbleSort:

```js
function bubbleSort(array){
    let arr = array.slice(0);
    if(arr){
        for(let count = 0;count < arr.length-1;count++){
            let over = true;
            for(let i = 0;i < arr.length;i++){
                if(arr[i] > arr[i+1]){
                    let temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    over = false;
                }
            }
            if(over){
                break;
            }
        }
    }else{
        console.error(`bubbleSort: unkown array '${arr}'`);
    }
    return arr
}
```

# radixSort:

```js
function radixSort(array){
    let arr = array.slice(0);
    if(arr){
      var len = arr.length;
      var bullet= [];
      var k=1, temp;
      for (var i = 0; i < 10; i++)
        bullet[i] = [];
      while (true){
        var num = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (var i = 0; i < len; i++){
          temp = Math.floor(arr[i] / k) % 10;
          bullet[temp][num[temp]++] = arr[i];
        }
        if (num[0] == len) break;
        for (var i = 0; i < len; i++){
          for (var j = 0; j < 10; j++){
            for (var r = 0; r < num[j]; r++)
              arr[i++] = bullet[j][r];
          }
        }
        k *= 10;
      }
    }else{
      console.error(`radixSort: unkown array '${arr}'`);
    }
    return arr;
}
```
_If you want to learn more about sorting algorithms, you can visit =>_[sort algorithm](sort) [sort algorithm (code)](sort/code.html)

# run time list 
(_**Just for my algorithm! and my computer! If you want to calculate the run time yourself, you can visit =>**_[test sort algorithm run time](sort/SAPA.html)

**length:1000**:
|  sort algorithm  | run time |
|:-----------------|:---------|
|bubble            |11.066ms  |
|bipartitelnsertion|6.255ms   |
|bucketSort        |1.127ms   |
|counting          |0.623ms   |
|heap              |4.429ms   |
|insertion         |4.754ms   |
|merge             |5.764ms   |
|quick             |5.261ms   |
|radix             |1.645ms   |
|selection         |5.083ms   |
|shell             |5.785ms   |

**length:10000**:
|  sort algorithm  | run time |
|:-----------------|:---------|
|bubble            |1017.191ms|
|bipartitelnsertion|80.623ms  |
|bucketSort        |12.458ms  |
|counting          |5.910ms   |
|heap              |13.985ms  |
|insertion         |76.564ms  |
|merge             |47.726ms  |
|quick             |465.000ms |
|radix             |29.969ms  |
|selection         |237.993ms |
|shell             |15.841ms  |