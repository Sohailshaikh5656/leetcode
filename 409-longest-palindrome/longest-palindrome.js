/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let object = {}
    s.split("").map((ele)=>{
        if(!object[ele]){
            object[ele] = 1
        }else{
            object[ele] = object[ele]+1
        }
    })

    let count = 0
    let odd = false
    console.log(object)
    for(let key in object){
        if(object[key]%2===0) {
            count += object[key]
        }
        else{
            if(!odd){
                count += object[key]
                odd = !odd
            }else{
                let ele = object[key]-1
                if(ele > 0){
                    count += ele
                }
            }
        }
    }
    return count
};