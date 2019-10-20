# all sort function code:

```js
function  bipartiteInsertionSort(arr) {
    let array = arr.slice(0);
    if (array) {
      var len = array.length, i, j, tmp, low, high, mid, result;
      result = array.slice(0);
      for (i = 1; i < len; i++) {
        tmp = result[i];
        low = 0;
        high = i - 1;
        while (low <= high) {
          mid = parseInt((low + high) / 2, 10);
          if (tmp < result[mid])
            high = mid - 1;
          else
            low = mid + 1;
        }
        for (j = i - 1; j >= high + 1; j--) {
          result[j + 1] = result[j];
        }
        result[j + 1] = tmp;
      }
    }
    else {
      console.error(`bipartiteInsertionSort: unkown array '${array}'`);
    }
    return result;
}

function countingSort(array){
  let arr = array.slice(0);
  if(arr){
      if(arr.length < 2){
          return arr
      }else{
          function findMaxValue(array){
              let max = array[0];
              for(let i=1;i<array.length;i++){
                  if(array[i] > max){
                      max = array[i];
                  }
              }
              return max
          }
          const maxValue = findMaxValue(arr);
          const counts = new Array(maxValue+1);
          arr.forEach(element => {
              if(!counts[element]){
                  counts[element] = 0;
              }
              counts[element]++;
          })
          let sortedIndex = 0;
          counts.forEach((count,i)=>{
              while(count > 0){
                  arr[sortedIndex++] = i;
                  count--;
              }
          })
          return arr
      }
  }else{
      console.error(`coutingSort unkown array '${arr}'`);
  }
}

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

function heapSort(array) {
    var result = array.slice(0);
    if (result) {
      function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      function maxHeapify(array, index, heapSize) {
        var iMax, iLeft, iRight;
        while (true) {
          iMax = index;
          iLeft = 2 * index + 1;
          iRight = 2 * (index + 1);
          if (iLeft < heapSize && array[index] < array[iLeft]) {
            iMax = iLeft;
          }
          if (iRight < heapSize && array[iMax] < array[iRight]) {
            iMax = iRight;
          }
          if (iMax != index) {
            swap(array, iMax, index);
            index = iMax;
          }
          else {
            break;
          }
        }
      }
      function buildMaxHeap(arr) {
        let array = arr.slice(0);
        var i, iParent = Math.floor(array.length / 2) - 1;
        for (i = iParent; i >= 0; i--) {
          maxHeapify(array, i, array.length);
        }
      }
      function sort(array) {
        buildMaxHeap(array);
        for (var i = array.length - 1; i > 0; i--) {
          swap(array, 0, i);
          maxHeapify(array, 0, i);
        }
        return array;
      }
    }
    else {
      console.error(`heapSort: unkown array ${result}`);
    }
    return sort(result);
}

function insertionSort(array) {
    let arr = array.slice(0);
    if (arr) {
      for (var i = 1; i < arr.length; i++) {
        var preIndex = i - 1;
        var current = arr[i];
        while (preIndex >= 0 && current < arr[preIndex]) {
          arr[preIndex + 1] = arr[preIndex];
          preIndex--;
        }
        arr[preIndex + 1] = current;
      }
    }
    else {
      console.error(`insertionSort: unkown array '${arr}'`);
    }
    return arr;
}

function mergeSort(array) {
    var result = array.slice(0);
    if (result) {
      function sort(array) {
        var length = array.length, mid = Math.floor(length * 0.5), left = array.slice(0, mid), right = array.slice(mid, length);
        if (length === 1) {
          return array;
        }
        return merge(sort(left), sort(right));
      }
      // 合并 两有序的数组
      function merge(left, right) {
        var result = [];
        while (left.length || right.length) {
          if (left.length && right.length) {
            if (left[0] < right[0]) {
              result.push(left.shift());
            }
            else {
              result.push(right.shift());
            }
          }
          else if (left.length) {
            result.push(left.shift());
          }
          else {
            result.push(right.shift());
          }
        }
        return result;
      }
    }
    else {
      console.error(`mergeSort: unkown array '${result}'`);
    }
    return sort(result);
}
  
function quickSort(array) {
    let arr = array.slice(0);
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }
    else {
        console.error(`quickSort: unkown array '${arr}'`);
    }
    return arr;
}

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

function selectionSort(arr) {
    var array = arr.slice(0);
    if (array) {
      var len = array.length, i, j, k, tmp, result;
      result = array.slice(0);
      for (i = 0; i < len; i++) {
        k = i;
        for (j = i + 1; j < len; j++) {
          if (result[j] < result[k])
            k = j;
        }
        if (k != i) {
          tmp = result[k];
          result[k] = result[i];
          result[i] = tmp;
        }
      }
    }
    else {
      console.error(`selectionSort: unknow array '${array}'`);
    }
    return result;
}

function shellSort(array) {
    let arr = array.slice(0);
    if(arr){
        let len = arr.length;
        for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i];
            while(j - gap >= 0 && current < arr[j - gap]) {
              arr[j] = arr[j - gap];
              j = j - gap;
            }
            arr[j] = current;
          }
        }
    }else{
        console.error(`shellSort: unkown array '${arr}'`);
    }
    return arr
}

function bucketSort(array){
  let arr = array.slice(0);
  if(arr){
      if(arr.length > 2){
          let bucketsize = 10;
          function autosize(arr){
              let same_score = [];
              for(let i = 0;i<arr.length;i++){
                  same_score[i] = arr.searchelement(arr[i],true).length-1;
              }
              if(same_score == 0){
                  bucketsize = arr.length;
              }else{
                  let sameelement = 0;
                  let notsameelement = 0;
                  for(let k = 0;k<same_score.length;k++){
                      if(same_score[k] > 0){
                          sameelement++;
                      }else{
                          notsameelement++;
                      }
                  }
                  bucketsize = sameelement + notsameelement;
              }
          }
          function createBuckets(array,bucketSize){
              let minValue = array[0];
              let maxValue = array[0];
              for(let i = 1;i<array.length;i++){
                  if(array[i] < minValue){
                      minValue = array[i];
                  }else if(array[i] > maxValue){
                      maxValue = array[i];
                  }
              }
              const bucketCount = Math.floor((maxValue-minValue)/bucketSize)+1;
              const buckets = [];
              for(let i = 0;i<bucketCount;i++){
                  buckets[i] = [];
              }
              for(let i = 0;i<array.length;i++){
                  const bucketIndex = Math.floor((array[i] - minValue)/bucketSize);
                  buckets[bucketIndex].push(array[i]);
              }
              return buckets
          }
          function sortBuckets(buckets){
              const sortedArray = [];
              for(let i = 0;i<buckets.length;i++){
                  if(buckets[i] != null){
                      insertionSort(buckets[i]);
                      sortedArray.push(...buckets[i]);
                  }
              }
              return sortedArray
          }
          function insertionSort(arr){
              for (var i = 1; i < arr.length; i++) {
                  var preIndex = i - 1;
                  var current = arr[i];
                  while (preIndex >= 0 && current < arr[preIndex]) {
                    arr[preIndex + 1] = arr[preIndex];
                    preIndex--;
                  }
                  arr[preIndex + 1] = current;
              }
              return arr
          }
          //autosize(arr);
          const buckets = createBuckets(arr,bucketsize);
          return sortBuckets(buckets)
      }else{
          return arr
      }
       
  }else{
      console.error(`bucketSort: unkown array '${arr}'`);
  }
}

Array.prototype.searchelement = function(element,auto,begin_index,end_index){
  let indexs = [];
  if(auto == true){
      for(let index = 0;index < this.length;index++){
          if(this[index] == element){
              indexs[indexs.length] = index;
          }
      }
  }else if(auto == false){
      for(let index = begin_index;index < end_index;index++){
          if(this[index] == element){
              indexs[indexs.length] = index;
          }
      }
  }else{
      console.error("search element error");
  }
  return indexs
}
```

_**The algorithm will update from time to time**_

If you find any bug, please email me [1845767798@qq.com](#)