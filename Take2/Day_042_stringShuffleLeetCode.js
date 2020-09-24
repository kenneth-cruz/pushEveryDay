var restoreString = function(s, indices) {
    let answer = []
    for(let i = 0; i < s.length; i ++){
        answer[indices[i]] = s[i]
    }
    return answer.join('')
};