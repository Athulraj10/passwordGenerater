// var moveZeroes = function(nums) {
//     if(nums.length<1){
//         return false
//     }
//     return nums.sort((a, b)=> (b==1||b==0)-(a==1||a==0)).sort()
//     };

var moveZeroes = function (nums) {
  if (nums.length < 1) {
    return false;
  }

  let nonZeroIndex = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is non-zero
    if (nums[i] !== 0) {
      // Swap it with the element at the nonZeroIndex
      let temp = nums[nonZeroIndex];
      nums[nonZeroIndex] = nums[i];
      nums[i] = temp;
      nonZeroIndex++;
      console.log(nonZeroIndex);
    }
  }
  return nums;
};

// Example usage:
// const result = moveZeroes([0, 1, 0, 3, 12]);
// console.log(result); // Output: [1, 3, 12, 0, 0]

// let k = moveZeroes(nums)
// console.log(k)
function sumOfDup(nums) {
    const unique = nums.filter((v) => nums.indexOf(v) == nums.lastIndexOf(v));
    return unique.length < 1 ? 0 : unique.reduce((a, c) => (a += c));
}

let nums = [0,1,0,3,12,0,1,0,1,1,1];
console.log(sumOfDup(nums))
