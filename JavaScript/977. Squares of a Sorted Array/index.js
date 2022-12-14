/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map((x) => {
        return Math.pow(x, 2);
    }).sort((a,b)=>a-b);
};

console.log(sortedSquares([-4,-1,0,3,10]));