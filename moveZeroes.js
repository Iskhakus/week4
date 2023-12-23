function moveZeroes(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i += 1) { 
        if (arr[i] !== 0) {
            let num = arr[n];
            arr[n] = arr[i];
            arr[i] = num;
            n += 1;
        } 
    } 
    return arr
}
  const nums = [0, 1, 0, 3, 12]
  const nums2 = [0]
  console.log(moveZeroes(nums));
  console.log(moveZeroes(nums2));