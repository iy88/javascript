---
layout: default
---

This web page about algorithm and Data structures(such as: _**Stack**_,_**bubbleSort**_,_**radixSort**_...).

# bubbleSort:

```js
function bubbleSort(array){
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
    return arr
}
```

_If you want to learn more about sorting algorithms, you can visit =>_[sort algorithm](sort)/[sort algorithm (code)](sort/code.html)

# run time list 
(_**Just for my algorithm! and my computer! If you want to calculate the run time yourself, you can visit =>**_[test sort algorithm run time](sort/SAPA.html)

**length:1000**:

|  sort algorithm  | run time |
|:-----------------|:---------|
|bubble            |11.066ms  |
|bipartitelnsertion|6.255ms   |
|bucketSort        |1.127ms   |
|counting          |0.623ms   |
|heap              |4.429ms   |
|insertion         |4.754ms   |
|merge             |5.764ms   |
|quick             |5.261ms   |
|radix             |1.645ms   |
|selection         |5.083ms   |
|shell             |5.785ms   |

**length:10000**:

|  sort algorithm  | run time |
|:-----------------|:---------|
|bubble            |1017.191ms|
|bipartitelnsertion|80.623ms  |
|bucketSort        |12.458ms  |
|counting          |5.910ms   |
|heap              |13.985ms  |
|insertion         |76.564ms  |
|merge             |47.726ms  |
|quick             |465.000ms |
|radix             |29.969ms  |
|selection         |237.993ms |
|shell             |15.841ms  |

# Performance of sorting algorithm:

|                  |                     Time complexity                      |
|:-----------------|:---------------------------------------------------------|
|  sort algorithm  |    Best case    |   General situation   |   Worst case   |
|:-----------------|:----------------|:----------------------|:---------------|
|bubble            |       O(n)      |        O(n^2)         |     O(n^2)     |
|bucketSort        |      O(n+k)     |        O(n+k)         |     O(n^2)     |
|counting          |      O(n+k)     |        O(n+k)         |     O(n+k)     |
|heap              |    O(nlog(n))   |      O(nlog(n))       |   O(nlog(n))   |
|insertion         |      O(n)       |        O(n^2)         |     O(n^2)     |
|merge             |    O(nlog(n))   |      O(nlog(n))       |   O(nlog(n))   |
|quick             |    O(nlog(n))   |      O(nlog(n))       |     O(n^2)     |
|radix             |      O(nk)      |         O(nk)         |     O(nk)      |
|selection         |     O(n^2)      |        O(n^2)         |     O(n^2)     |
|shell             |   O(nlog^2(n))  |     O(nlog^2(n))      |  O(nlog^2(n))  |

_**Time complexity by 《Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition》 Loiane Groner**_

# search library

**This is an simple javascript search library I made by myself.**

**It can quickly search all the corresponding contents in the string or array indexed by one or more characters.**

## how to use:

**If you have an array or string variable such as str1 array1 You can call**

**search function And pass in the parameter (array or string, string to search)**

**such as search(str1,"afdj"),search(array1,,"asfdfl")**

**Then you can declare a variable to receive the result**

**The results are similar to these !**

```js
{
  first: 0, //{1}
  last: 4,  //{2}
  lcsindexs: [ 0, 1, 2, 3, 4 ], //{3}
  best: [0], //{4}
  msindexs: [ 2, 0, 1, 4, 3 ] //{5}
}
```

**Let's take a look at this:**

**In line {1}, the first attribute is used to get the first search result. If there is no result, undefined will be returned.**

**In line {2}, the last attribute is used to get the last search result. If there is no result, undefined will be returned.**

**In line {3}, the lcsindexs attribute is used to get all the approximate search results. If there is no result, it will return [].** 

**In line {3}, _(You can quickly export all element indexes containing search strings)_.**

**In line {4}, the best attribute is used to get the best result (exactly the same), if it does not return [].**

**In the last row, the msindexs attribute returns the best to worst result based on all found elements, if it does not return [].**

**_Return all index values!!!_**

**If you want to know its source code, you can check the uncompressed version _[search.js](search/search.js)_.**

**This is a compressed version _[search.min.js](search/search.min.js)_.**

_**You can use it directly through the link(https://iy88.github.io/javascript/search/search.min.js) or download the source code**_

# editor-online

**this is an Web online editor.**

**you can use it to write html or css or javascript online and you can see the result.**

**link: _[editor](/editor-online/index.html)_**
