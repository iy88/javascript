function heapSort(array) {
  console.time('heapSort run time');
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
  console.timeEnd('heapSort run time');
  return sort(result);
}
