var numTeams = function(rating) {
    let counter = 0;
    for(let i = 0; i < rating.length; i ++){
        for(let j = 0; j < rating.length; j ++){
            for(let k = 0; k < rating.length; k ++){
                {
                    if(i < j && j < k){
                        if(rating[i] < rating[j] && rating[j] < rating[k] ||
                        rating[i] > rating [j] && rating[j] > rating[k]) counter ++
                    }
                    
                }
            }
        }
    }
    return counter
};