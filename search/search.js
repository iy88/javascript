Array.prototype.searchelement = function (element, auto, begin_index, end_index) {
    let indexs = [];
    if (auto === true) {
        for (let index = 0; index < this.length; index++) {
            if (this[index] === element) {
                indexs[indexs.length] = index;
            }
        }
    } else if (auto === false) {
        for (let index = begin_index; index < end_index; index++) {
            if (this[index] === element) {
                indexs[indexs.length] = index;
            }
        }
    } else {
        console.error("search element error");
    }
    return indexs
}

let lcs = (wordX, wordY) => {
    const m = wordX.length;
    const n = wordY.length;
    const l = [];
    for (let i = 0; i <= m; i++) {
        l[i] = [];
        for (let j = 0; j <= n; j++) {
            l[i][j] = 0;
        }
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0;
            } else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
            } else {
                const a = l[i - 1][j];
                const b = l[i][j - 1];
                l[i][j] = a > b ? a : b;
            }
        }
    }
    return l[m][n];
}

function countingSort(array) {
    let arr = array.slice(0);
    if (arr) {
        if (arr.length < 2) {
            return arr
        } else {
            function findMaxValue(array) {
                let max = array[0];
                for (let i = 1; i < array.length; i++) {
                    if (array[i] > max) {
                        max = array[i];
                    }
                }
                return max
            }
            const maxValue = findMaxValue(arr);
            const counts = new Array(maxValue + 1);
            arr.forEach(element => {
                if (!counts[element]) {
                    counts[element] = 0;
                }
                counts[element]++;
            })
            let sortedIndex = 0;
            counts.forEach((count, i) => {
                while (count > 0) {
                    arr[sortedIndex++] = i;
                    count--;
                }
            })
            return arr
        }
    }
}

function bubbleSort(array){
    //console.time('bubbleSort run time');
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
    //console.timeEnd('bubbleSort run time');
    return arr
}

function ms(word1,word2){
    let str1 = word1;
    let str2 = word2;
    let length = 0;
    let fi = str1.indexOf(str2[0]);
    if(fi != -1){
        length = 1;
        for(let i = fi+1; i < str2.length; i++){
            for(let j = fi + 1; j<str1.length; j++){
                if(str1[j] === str2[i]){
                    length++
                }else{
                    break;
                }
            }
        }
    }
    return length
}

Array.prototype.DeleteDuplication = function () {
    let arr = [];
    for (var i = 0; i < this.length; i++) {
        if (arr.indexOf(this[i]) === -1) {
            arr.push(this[i]);
        }
    }
    return arr
}

function search(sd, se) {  //sd: searchdatas  se: searchelement
    let d = arguments[0], //d: searchdatas
        s = arguments[1], //s: searchelement 
        first = -1,      //first: first find index
        last = -1,       //lase: lase find index
        best = [],       //best: the best find element's index
        indexs = [],    //index: all find indexs
        lcsresult = [], //all element's lcs result  
        lcssort,    //lcsresult sort 
        sortresult = [], //sort socre result  
        bestindexs = [], //best round search result
        weightresult = [],
        weightsort = [],            //weight%
        weightsortresult = [];
    for (let ap = 0; ap < d.length; ap++) {//ap: searcharray's index  
        if (d[ap] === s) {                  // if d's element ap = searchelement push now ap to best 
            best[best.length] = ap;
        }
    }
    for (let searchdataindex = 0; searchdataindex < d.length; searchdataindex++) {//ap: searcharray's index 
        lcsresult[lcsresult.length] = lcs(d[searchdataindex], s);
    }
    lcssort = countingSort(lcsresult);  //sort lcsresults

    for (let i = 0; i < lcssort.length; i++) {
        if (lcssort[i] != 0) {                //if lcsresult = 0 next
            sortresult.push(...lcsresult.searchelement(lcssort[i], true)); //push search result
        }
    }
    for (let searchdataindex = 0; searchdataindex < d.length; searchdataindex++) {//ap: searcharray's index 
        weightresult[weightresult.length] = ms(d[searchdataindex], s) / d[searchdataindex].length
    }
    weightsort = bubbleSort(weightresult);  //sort msresults
    for (let i = 0; i < weightsort.length; i++) {
        if (weightsort[i] != 0) {                //if msresult = 0 next
            weightsortresult.push(...weightresult.searchelement(weightsort[i], true)); //push search result
        }
    }
    
    bestindexs = weightsortresult.DeleteDuplication().reverse();
    indexs = sortresult.DeleteDuplication(); //deleteduplication
    first = sortresult[0];
    last = sortresult[sortresult.length - 1];
    return {
        first: first,
        last: last,
        lcsindexs: indexs,              //return searchresult
        best: best,
        msindexs: bestindexs,
    }
}