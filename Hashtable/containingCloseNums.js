// Given an array of integers nums and an integer k,
// determine whether there are two distinct indices 
// i and j in the array where nums[i] = nums[j] and 
// the absolute difference between i and j is less than 
// or equal to k.

function containsCloseNums(nums, k) {
    var ht = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in ht) {
            if (i - ht[nums[i]] <= k)
                return true
            else
                ht[nums[i]] = i;
        }
        else
            ht[nums[i]] = i;
    }
    return false;
}

const nums = [0, 1, 2, 3, 5, 2]
const k = 3
console.log(containsCloseNums(nums, k));
// returns true
// There are two 2s in nums, and the absolute 
// difference between their positions is exactly 3.
