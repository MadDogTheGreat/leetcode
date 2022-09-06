/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length <= 2) return false;

    let middleMaxIndex = null;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (middleMaxIndex === null) {
            if (arr[i] < arr[i - 1]) {
                middleMaxIndex = i - 1;
            } else if (arr[i] === arr[i - 1]) {
                return false;
            }
        } else if (arr[i] >= arr[i - 1]) {
            return false;
        }
    }

    return middleMaxIndex > 0 && middleMaxIndex < arr.length - 1
};

