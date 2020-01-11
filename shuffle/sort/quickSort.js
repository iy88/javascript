function quickSort(array) {
    console.time('quickSort run time');
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
    console.timeEnd('quickSort run time');
    return arr;
}