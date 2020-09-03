var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (i = 0; i <= nums.length; i++) {
        for (j = i+1; j <= i+k; j++) {
            if (Math.abs(nums[i]-nums[j]) <= t) return true;
        }
    }
    return false;
};