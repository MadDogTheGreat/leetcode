/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length;
    let i = 0;
    while (i < len) {
        if (nums[i] === val) {
            nums[i] = nums[len - 1];
            len--;
        } else {
            i++;
        }
    }

    return len;
};

// In-place algorithm
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElementInPlace = function (nums, val) {
    const n = nums.length;

    let writePointer = 0
    let readPointer = 0;
    while (readPointer < n) {
        if (nums[readPointer] === val) {
            readPointer++;
        } else {
            [nums[writePointer], nums[readPointer]] = [nums[readPointer], nums[writePointer]]
            readPointer++;
            writePointer++;
        }
    }

    return writePointer;
};