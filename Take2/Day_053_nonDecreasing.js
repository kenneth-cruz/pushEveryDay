var checkPossibility = function(nums) {
    let elemToModify = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            if (nums[i-1] > nums[i+1]) {
                nums[i+1] = nums[i];
            }
            elemToModify++;
        }
        if (elemToModify > 1) return false;
    }     
    return true;
};