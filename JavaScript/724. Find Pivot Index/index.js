/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let n = nums.length;
    let lefSum = 0;
    let sum = 0;
    nums.forEach((elem) => sum += elem)

    for (let i = 0; i < n; i++) {
        if (sum - lefSum - nums[i] === lefSum) {
            return i;
        }
        lefSum += nums[i];
    }

    return -1;
};