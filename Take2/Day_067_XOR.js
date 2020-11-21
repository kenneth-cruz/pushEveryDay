var xorOperation = function(n, start) {
    let nums = new Array(n).fill(0)
    for(let i = 0; i < nums.length; i++){
        nums[i] = start + (2*i)
    }
    return nums.reduce((acc, cur) => acc ^ cur, 0);

};