var thirdMax = function(nums) {
  let arrayValues = Array.from(new Set(nums.sort((a,b) => b-a)))
  if(arrayValues.length < 3) return arrayValues[0]
  return arrayValues[2]
};

let nums = [3,2,1];
console.log(thirdMax(nums))