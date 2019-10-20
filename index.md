---
layout: default
---

This web page about algorithm and Data structures(such as: _**Stack**_|_**bubbleSort**_|_**radixSort**_...).

[sort algorithm](https://iy88.github.io/javascript/sort "sort algorithm")

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

## radixSort:

```js
function radixSort(array){
    let arr = array.slice(0);
    if(arr){
      var len = arr.length;
      var bullet= [];
      var k=1, temp;
      for (var i = 0; i < 10; i++)
        bullet[i] = [];
      while (true){
        var num = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (var i = 0; i < len; i++){
          temp = Math.floor(arr[i] / k) % 10;
          bullet[temp][num[temp]++] = arr[i];
        }
        if (num[0] == len) break;
        for (var i = 0; i < len; i++){
          for (var j = 0; j < 10; j++){
            for (var r = 0; r < num[j]; r++)
              arr[i++] = bullet[j][r];
          }
        }
        k *= 10;
      }
    }else{
      console.error(`radixSort: unkown array '${arr}'`);
    }
    return arr;
}
```
_If you want to learn more about sorting algorithms, you can visit =>_[sort algorithm]("sort/sort.html")
### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```