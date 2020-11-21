var countPrimes = function(n) {
    let answers = []
    var checkPrime = function(x){
        if(x === 1){
            return false;
        }
        else if(x === 2){
            return true;
        }
        else{
            for(let i = 2; i < x; i++){
                if(x % i === 0){
                    return false;
                }
            }
            return true;
        }
    }
    for(let start = 1; start < n; start++){
        if(checkPrime(start) === true){
            answers.push(start)
        }
    }
    return answers.length
};