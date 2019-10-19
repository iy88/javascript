function radixSort(array){
  console.time("radixSort run time");
  let arr = array.slice(0);
  if(arr){
    var len = arr.length;
    var bullet= [];
    var k=1, temp;//k是处理数字的权重，k=1表示处理个位数，k=10表示处理十位数，以此类推
    for (var i = 0; i < 10; i++)//为每个桶分配内存空间
      bullet[i] = [];
    while (true){
      var num = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];//num用来统计0~9每个桶里面现有数字个数
      for (var i = 0; i < len; i++){//统计分配每个数字到桶里面，并统计每个桶数字个数
        temp = Math.floor(arr[i] / k) % 10;
        bullet[temp][num[temp]++] = arr[i];
      }
      if (num[0] == len) break;//当全部数字都在编号为0的桶中，排序结束
      //将桶里的数依次放回a数组中
      for (var i = 0; i < len; i++){
        for (var j = 0; j < 10; j++){
          for (var r = 0; r < num[j]; r++)
            arr[i++] = bullet[j][r];
        }
      }
      k *= 10;//k增加10倍，从右至左处理下一位数字
    }
  }else{
    console.error(`radixSort: unkown array '${arr}'`);
  }
  console.timeEnd('radixSort run time');
  return arr;
}