/**
 * @param {number[]} arr
 * @return {number}
 */
const removeDuplicates = function (arr) {
    let n = arr.length;
    if (n == 0 || n == 1)
        return n;

    let temp = new Array(n);

    let j = 0;
    for (let i = 0; i < n - 1; i++)
        if (arr[i] != arr[i + 1])
            temp[j++] = arr[i];

    temp[j++] = arr[n - 1];

    for (var i = 0; i < j; i++)
        arr[i] = temp[i];

    return j;
};

// In-place algorithm
/**
 * @param {number[]} arr
 * @return {number}
 */
const removeDuplicatesInPlace = function (arr) {
    const n = arr.length;
    if (n == 0 || n == 1)
        return n;

    let j = 0;

    for (let i = 0; i < n - 1; i++)
        if (arr[i] != arr[i + 1])
            arr[j++] = arr[i];

    arr[j++] = arr[n - 1];

    return j;
};
