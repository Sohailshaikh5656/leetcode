/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let mainCount = 0
    let count = 0

    for(let i=0;i<nums.length-1;i++){
        if(nums[i]<nums[i+1]){
            count++
            if(count>mainCount){
                console.log(`Compare : ${nums[i]} && ${nums[i+1]} and Count ${count}` )
                mainCount = count
            }
        }else count = 0
    }

    return mainCount+1
};