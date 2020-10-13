var maxDepth = function(s) {
    let counter = 0
    let items = []
    if(s === '' || s === '(' || s === ')' || s.length === 1 || s.includes('(') === false) return 0
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === '('){
            counter++
        }
        else if(s[i] === ')'){
            items.push(counter)
            counter --
        }
    }
    return Math.max(...items)
};