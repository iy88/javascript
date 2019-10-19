function countingSort(array){
    let arr = array.slice(0);
    if(arr){
      console.time('countingSort run time');  
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
            console.timeEnd('countingSort run time');
            return arr
        }
    }else{
        console.error(`coutingSort unkown array '${arr}'`);
    }
}