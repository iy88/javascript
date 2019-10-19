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
            console.time(`bucketSort run time`);
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
            console.timeEnd('bucketSort run time');
            return sortBuckets(buckets)
        }else{
            return arr
        }
         
    }else{
        console.error(`bucketSort: unkown array '${arr}'`);
    }
}


function randomNumArray(length,type){
    let arr = [];
    if(type == 0){
        for(let i = 0;i<length;i++){
            arr[arr.length] = i;
        }
        arr.sort(randomsort)
        return arr
    }else if(type == 1){
        for(let i = length-1;i>=0;i--){
            arr[arr.length] = i;
        }
    }else if(type == -1){
        for(let i = 0; i < length;i++){
            arr[arr.length] = Math.floor(Math.random()*10);
        }
    }
    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }
    arr.sort(randomsort)
    return arr
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

let arr = randomNumArray(100,-1);
console.log(arr)
bucketSort(arr);