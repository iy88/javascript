function randomNumArray(length, type) {
  let arr = [];
  if (type == 0) {
    for (let i = 0; i < length; i++) {
      arr[arr.length] = i;
    }
    arr.sort(randomsort);
    return arr;
  }
  else if (type == 1) {
    for (let i = length - 1; i >= 0; i--) {
      arr[arr.length] = i;
    }
  }
  function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  }
  arr.sort(randomsort);
  return arr;
}

onmessage = (event) => {
  postMessage(randomNumArray(event.data,1));
  close();
}
