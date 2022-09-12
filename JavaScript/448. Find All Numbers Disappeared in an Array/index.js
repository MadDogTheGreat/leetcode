/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let shouldBeThis = Array.from({ length: n }, (_, i) => i + 1);

    let res = [];
    let i = 0, j = 0;
    while (i < n) {
        if (nums[i] !== shouldBeThis[j]) {
            if (!nums.includes(shouldBeThis[j]))
                res.push(shouldBeThis[j])
        }
        j++;
        i++;
    };

    return res;
};
