function pivotIndex(arr) {
    let sum = 0;
    let n;
    let sum1 = 0;
    for (let i = 0; i < arr.length; i += 1) {
        n = arr[i];
        sum += n;
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (sum1 === sum - sum1 - arr[i]) {
            return i;
        }
        sum1 += arr[i];
    }
    return -1;
}
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));

const nums1 = [1, 2, 3];
console.log(pivotIndex(nums1));

const nums2 = [2, 1, -1]
console.log(pivotIndex(nums2));