function averaging(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    sum /= array.length;
    return sum
}

onmessage = (event) => {
    postMessage(averaging(event.data));
    close();
}
