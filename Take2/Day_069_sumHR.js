function simpleArraySum(ar) {
    let reducer = (start, sum) => start + sum
    return(ar.reduce(reducer))
}