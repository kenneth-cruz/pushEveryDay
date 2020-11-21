var arrangeCoins = function(n) {
    let sumCounter = 1;
    if(n <= 1) return n
    while( n - sumCounter >= 0){
        n = n - sumCounter
        sumCounter++
    }
    return sumCounter-1
};