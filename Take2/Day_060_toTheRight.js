var replaceElements = function(arr) {
    let answer = []
    let largest = 0;
    for(let i = 1 ; i < arr.length; i++){
       answer.push((Math.max(...arr.slice(i))))
    }
    answer.push(-1)
    return(answer)
};