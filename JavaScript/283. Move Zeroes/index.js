/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const n = nums.length;

    let writePointer = 0
    let readPointer = 0;
    while (readPointer < n) {
        if (nums[readPointer] === 0) {
            readPointer++;
        } else {
            [nums[writePointer], nums[readPointer]] = [nums[readPointer], nums[writePointer]]
            readPointer++;
            writePointer++;
        }
    }
};