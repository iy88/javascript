function insertionSort(array) {
  console.time('insertionSort run time');
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
  console.timeEnd("insertionSort run time");
  return arr;
}