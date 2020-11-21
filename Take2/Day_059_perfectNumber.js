var isPerfectSquare = function(num) {
    let root = Math.sqrt(num)
    return (root === Math.floor(root) ? true : false)
};