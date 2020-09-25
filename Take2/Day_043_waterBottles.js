var numWaterBottles = function(numBottles, numExchange) {
    let tracker = numBottles
    let remainder = numBottles % numExchange
    while (numBottles >= numExchange){
        tracker += Math.floor(numBottles / numExchange)
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange)
    }
    return tracker
};