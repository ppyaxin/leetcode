/**
 * @param {number} target
 * @return {number[][]}
 */

//滑动窗口双指针,把滑动窗口默认为左闭右开
var findContinuousSequence = function (target) {
    let left = 1
    let right = 1
    let sum = 0
    let result=[]
    while (left < (target / 2)) {
        if (sum < target) {
            right++
            sum += right - 1
        } else if (sum > target) {
            sum -= left
            left++
        }else{
            let temp=[]
            for(let i=left;i<right;i++){
               temp[i-left]=i
            }
            result.push(temp)
            sum -= left
            left++
        }
    }
    return result
};
console.log(findContinuousSequence(9))