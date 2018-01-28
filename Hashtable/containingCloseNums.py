# Given an array of integers nums and an integer k,
# determine whether there are two distinct indices
# i and j in the array where nums[i] = nums[j] and
# the absolute difference between i and j is less than
# or equal to k.

def containsCloseNums(nums, k):
    ht = {}
    for i in range(0, len(nums)):
        if nums[i] in ht:
            if i - ht[nums[i]] <= k:
                return True
            else:
                ht[nums[i]] = i
        else:
            ht[nums[i]] = i
    return False


nums = [0, 1, 2, 3, 5, 2]
k = 2
print containsCloseNums(nums,k)
# return False
# The absolute difference between the positions 
# of the two 2s is 3, which is more than k.
