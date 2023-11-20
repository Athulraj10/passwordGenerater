let moveZeroes = function(nums) {
    if(nums.length<1){
        return false
    }
    let result =  nums.sort((a, b)=> b-a)
    return result
};

let nums = [0,1,0,3,12,0,1,0];
let k = moveZeroes(nums)
console.log(k)
