/*
project: javascript
data: 2020.01.09 19:16
user: ysf
editor: WebStorm
*/
Array.prototype.DeleteDuplication = function () {
    let arr = [];
    for (var i = 0; i < this.length; i++) {
        if (arr.indexOf(this[i]) === -1) {
            arr.push(this[i]);
        }
    }
    return arr
}

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

String.prototype.searchelement = function (element, auto, begin_index, end_index) {
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

function defaultSortFn(array) {
    var result = array.slice(0);
    if (result) {
        function swap(array, i, j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        function maxHeapify(array, index, heapSize) {
            var iMax, iLeft, iRight;
            while (true) {
                iMax = index;
                iLeft = 2 * index + 1;
                iRight = 2 * (index + 1);
                if (iLeft < heapSize && array[index] < array[iLeft]) {
                    iMax = iLeft;
                }
                if (iRight < heapSize && array[iMax] < array[iRight]) {
                    iMax = iRight;
                }
                if (iMax != index) {
                    swap(array, iMax, index);
                    index = iMax;
                } else {
                    break;
                }
            }
        }
        function buildMaxHeap(arr) {
            let array = arr.slice(0);
            var i,
                iParent = Math.floor(array.length / 2) - 1;
            for (i = iParent; i >= 0; i--) {
                maxHeapify(array, i, array.length);
            }
        }
        function sort(array) {
            buildMaxHeap(array);
            for (var i = array.length - 1; i > 0; i--) {
                swap(array, 0, i);
                maxHeapify(array, 0, i);
            }
            return array;
        }
    } else {
        console.error(`heapSort: unkown array ${result}`);
    }
    return sort(result);
}

function defaultlcs(wordX, wordY) {
    let found = wordX.indexOf(wordY[0]) !== -1 ? true : false;
    if (found) {
        let length = [];
        let ap = wordX.searchelement(wordY[0], true);
        for (let k = 0; k < ap.length; k++) {
            for (let i = ap[k]; i < wordX.length; i++) {
                for (let j = ap[k]; j < wordY.length; j++) {
                    if (wordX[i] === wordY[j]) {
                        length[k] != undefined ? length[k]++ : length[k] = 0;
                    } else {
                        break;
                    }
                }
            }
        }
        let length2 = [];
        ap = wordX.searchelement(wordY[0], true);
        for (let k = 0; k < ap.length; k++) {
            for (let i = ap[k]; i < wordY.length; i++) {
                for (let j = ap[k]; j < wordX.length; j++) {
                    if (wordX[j] === wordY[i]) {
                        length2[k] != undefined ? length2[k]++ : length2[k] = 0;
                    } else {
                        break;
                    }
                }
            }
        }
        return ((Math.max(...length) + Math.min(...length)) / 2 + (Math.max(...length2) + Math.min(...length2)) / 2) / 2;
    } else {
        return 0;
    }
}

function Search() {
    this.config = null; //search config object
    this.__sortFn__ = null; //search's sort function
    this.__lcsFn__ = null; //search's lcs function
    this.__rerurnType__ = null; //search's return type: "e" --- elements || "i" ---  indexs
    this.__isSaveConfig__ = null;//search's save config : true or false
    this.clearConfig = () => {this.config = null;this.__isSaveConfig__ = null};
    this.doConfig = issave => {
        //search's config function
        if (this.config === null) {
            throw new Error("please config first!");
        } else {
            if (this.config.sort !== undefined) {
                let arr = [2.23, 1.4];
                if (this.config.sort(arr) !== [1.4, 2.23] || arr !== [2.23, 1.4]) {        //check the sort function if hava config
                    delete arr;
                    throw new Error("please use the correct sorting algorithm!");
                } else {
                    this.__sortFn__ = this.config.selfFn.sort;
                }
            } else {
                this.__sortFn__ = defaultSortFn;
            }

            if (this.config.lcs !== undefined) {
                if (typeof this.config.lcs("abasdjfabadagaga", "ab") !== "number") {     //check the lcs function if hava config

                    throw new Error("lcs function must return a number!");
                } else {
                    this.__lcsFn__ = this.config.selfFn.lcs;
                }
            } else {
                this.__lcsFn__ = defaultlcs;
            }

            if (this.config.returnType === "e") {
                this.__rerurnType__ = this.config.returnType;
            } else {
                this.__rerurnType__ = "i";
            }
            if (issave) {
                this.__isSaveConfig__ = true;
            } else {
                this.__isSaveConfig__ = false;
            }
        }
        console.log("search config successfully!");
    };
    this.doDefultConfig = () => {
        this.config = {
    
        };
        this.doConfig();
    }
    this.ep = (data, query) => {
            let best = [];
            for (let ap = 0; ap < data.length; ap++) {
                if (data[ap] === query) {
                    best.push(ap);
                }
            }
            let elements = [];
            for (let i = 0; i < best.length; i++) {
                elements.push(data[best[i]]);
            }
            return elements;
    }
    this.ea = (data, query, sortFn, lcsFn) => {
            let weightresult = [];
            for (let searchdataindex = 0; searchdataindex < data.length; searchdataindex++) {//ap: searcharray's index 
                weightresult[weightresult.length] = lcsFn(data[searchdataindex], query) / data[searchdataindex].length;
            }
            let weightsort = sortFn(weightresult);  //sort msresults
            let weightsortresult = [];
            for (let i = 0; i < weightsort.length; i++) {
                if (weightsort[i] != 0) {                //if msresult = 0 next
                    weightsortresult.push(...weightresult.searchelement(weightsort[i], true)); //push search result
                }
            }
            let bestindexs = weightsortresult.DeleteDuplication().reverse();
            let elements = [];
            for (let i = 0; i < bestindexs.length; i++) {
                elements.push(data[bestindexs[i]]);
            }
            return elements;
    }
    
    this.ip = (data, query) => {
        let best = [];
        for (let ap = 0; ap < data.length; ap++) {
            if (data[ap] === query) {
                best.push(ap);
            }
        }
        return best
    }

    this.ia = (data, query, sortFn, lcsFn) => {
        let weightresult = [];
        for (let searchdataindex = 0; searchdataindex < data.length; searchdataindex++) {//ap: searcharray's index 
            weightresult[weightresult.length] = lcsFn(data[searchdataindex], query) / data[searchdataindex].length;
        }
        let weightsort = sortFn(weightresult);  //sort msresults
        let weightsortresult = [];
        for (let i = 0; i < weightsort.length; i++) {
            if (weightsort[i] != 0) {                //if msresult = 0 next
                weightsortresult.push(...weightresult.searchelement(weightsort[i], true)); //push search result
            }
        }
        let bestindexs = weightsortresult.DeleteDuplication().reverse();
        return bestindexs
    }

    this.doSearch = (data, query) => {
        if (this.config === null) { // check config
            throw new Error("please use the 'doConfig' or 'doDefaultConfig to config the search function first!");
        } else {
            if (Array.isArray(data)) {
                if (typeof query === "string") {
                    if (this.__rerurnType__ === "e") {
                        if (!this.__isSaveConfig__) {
                            console.log('clear');
                            this.clearConfig();
                        }
                        return {
                            p: this.ep(data, query),
                            a: this.ea(data, query, this.__sortFn__, this.__lcsFn__)
                        };
                    } else {
                        if (!this.__isSaveConfig__) {
                            console.log('clear');
                            this.clearConfig();
                        }
                        return {
                            p: this.ip(data, query),
                            a: this.ia(data, query, this.__sortFn__, this.__lcsFn__)
                        };
                    }
                }
            }
        }
    };
}
