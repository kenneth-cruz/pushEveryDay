var countGoodTriplets = function(arr, a, b, c) {
    let counter = 0
    console.log(arr, a, b, c)
    for(let i = 0; i < arr.length-2; i ++){
        for(let j = i+1; j < arr.length; j ++){
            let x = Math.abs(arr[i]-arr[j]) <= a
            if(!x) continue
            for(let k = j+1; k < arr.length; k ++){
                let y = Math.abs(arr[j]-arr[k]) <= b
                if(!y) continue
                let z = Math.abs(arr[i] - arr[k]) <= c
                if(z) counter++
            }
        }
    }
    return counter

};