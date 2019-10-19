function getArgumentsToarray(arguments){
    let arr = [];
    for(let i = 0; i < arguments.length; i++){
        arr[arr.length] = arguments[i];
    }
    return arr;
}