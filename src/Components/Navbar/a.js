var moveZeroes = function(nums) {
    if(nums.length<1){
        return false
    }
    return nums.sort((a, b)=> (b==1||b==0)-(a==1||a==0)).sort()
    };

let nums = [0,1,0,3,12,0,1,0];
let k = moveZeroes(nums)
console.log(k)
