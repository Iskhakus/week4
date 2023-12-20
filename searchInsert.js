function searchInsert(arr, num) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] >= num) {
            return i
        }
    }
    return nums.length
}

const nums = [1, 3, 5, 6]
console.log(searchInsert(nums, 5));
console.log(searchInsert(nums, 2));
console.log(searchInsert(nums, 7));