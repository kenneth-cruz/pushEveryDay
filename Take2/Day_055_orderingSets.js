var thirdMax = function(nums) {
    let meep = new Set(nums.sort((a,b) => { return a-b}))
    let sorted = Array.from(meep)
    console.log(sorted)
    return (sorted[sorted.length-3] !== undefined ? 
            sorted[sorted.length-3] : sorted[sorted.length-1])
};