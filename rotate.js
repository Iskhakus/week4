function rotate(arr, num) {
    const len = arr.length
    num = num % len
    const newArr = []
    for (let i = 0; i < arr.length; i += 1) {
        newArr[(i + num) % len] = arr[i]
    }
    for (let i = 0; i < len; i += 1) {
        arr[i] = newArr[i]
    }
    return arr
}
const nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
console.log(rotate(nums, k));