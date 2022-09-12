/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let unique = nums.filter((value, index, self) => {
        return self.indexOf(value) == index;
    });

    let n = unique.length;
    unique.sort((a, b) => b - a);
    if (n >= 3) {
        return unique[2];
    } else {
        return unique[0];
    }
};

console.log(thirdMax([2, 2, 3, 1]));