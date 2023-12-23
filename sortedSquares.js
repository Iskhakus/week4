function sortedSquares(arr1, m, arr2, n) {
    newArr1 = []
    newArr2 = []
    for (let i = 0; i < arr1.length; i += 1) {
        if (i < m) {
            newArr1.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i += 1) {
        if (i < n) {
            newArr2.push(arr2[i])
        }
    }
    return [...newArr1, ...newArr2].sort()
}
const nums1 = [1,2,3,0,0,0]
let m = 3
const nums2 = [2,5,6]
let n = 3
console.log(sortedSquares(nums1, m, nums2, n));