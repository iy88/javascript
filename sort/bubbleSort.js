function bubbleSort(array){
    console.time('bubbleSort run time');
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
    console.timeEnd('bubbleSort run time');
    return arr
}