/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let n = numRows
    if(n==0){
        return []
    }
    if(n==1){
        return [[1]]
    }
    if(n==2){
        return [[1],[1,1]]
    }

    let pascal = [[1],[1,1]]
    for(let i=2;i<n;i++){
        let oldArr = pascal[i-1]
        let newArr = [1]
        for(let j=0;j<oldArr.length-1;j++){
            newArr.push(oldArr[j]+oldArr[j+1])
        }
        newArr.push(1)
        pascal.push(newArr)
    }

    return pascal
};