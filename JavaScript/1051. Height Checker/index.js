/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let ans = 0;
    let n = heights.length;
    let sortedHeights = [...heights].sort((a, b) => a - b);

    let i = 0, j = 0;
    while (i < n) {
        if (heights[i] !== sortedHeights[j]) {
            ans++;
        }
        j++;
        i++;
    }

    return ans;
};