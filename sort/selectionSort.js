function selectionSort(arr) {
  console.time('selectionSort run time');
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
  console.timeEnd('selectionSort run time');
  return result;
}