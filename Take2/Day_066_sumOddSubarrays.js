var sumOddLengthSubarrays = function(arr) {
    let counter = 0
    let Addition = (start , adding ) => start + adding
    for(let i = 0; i <arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if((i-j)%2 ==0){
                let subArrays = arr.slice(i,j+1)
                counter += subArrays.reduce(Addition)
            }
        }
    }
    return counter
};
