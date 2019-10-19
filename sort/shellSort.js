function shellSort(array) {
  console.time('shellSort run time');
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
  console.timeEnd('shellSort run time');
  return arr
}