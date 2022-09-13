/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let n = nums.length;
    let res = new Array(n).fill(0);

    res[0] = nums[0];
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] + nums[i];
    }

    return res;
};