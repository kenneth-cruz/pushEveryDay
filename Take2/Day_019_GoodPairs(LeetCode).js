var numIdenticalPairs = function(nums) {
   let counter = 0;
   for(let i = 0; i < nums.length ; i++){
       for(let j = 1 ; j <nums.length; j++){
           if(i<j && nums[i] == nums[j]){
               counter++;
           }
       }
   }
    return counter
};
