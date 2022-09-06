/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const n = nums.length;

    let writePointer = 0
    let readPointer = 0;
    while (readPointer < n) {
        if (nums[readPointer] % 2 !== 0) {
            readPointer++;
        } else {
            [nums[writePointer], nums[readPointer]] = [nums[readPointer], nums[writePointer]]
            readPointer++;
            writePointer++;
        }
    }

    return nums;
};