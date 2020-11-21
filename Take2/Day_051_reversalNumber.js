var reverse = function(x) {
    let negative = false
    let abs = Math.abs(x)
    let reversal = abs.toString().split('').reverse().join('')
    if(x < Math.pow(-2,31) || x > Math.pow(2,31)-1 || reversal < Math.pow(-2,31) || reversal > Math.pow(2,31)-1){
        return 0
    }
    else{
        return ( x < 0 ? reversal * -1 : reversal)
    }
};