/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const n = arr.length;
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (arr[j] == 0) {
            count++;
        }
    }

    if (count > 1) {
        return true;
    }
    else {
        for (let i = 0; i < n; i++) {
            let double = arr[i] * 2;
            if (double == 0) {
                continue;
            }

            if (arr.includes(double)) {
                return true;
            }
        }

    }

    return false;
};
