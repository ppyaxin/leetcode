/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//     let results=[]
//     return getResult(target,candidates,results)

// };
// //left为剩下的target
// var getResult = function (left, candidates, results) {
//     //定义某一个答案
//     let result = []
//     for (let i = 0; i < candidates.length; i++) {
//         //减去下一个candidates
//         let temp = left - candidates[i]
//         //如果剩下的还有的减
//         if (temp > 0) {
//             result.push(candidates[i])
//             getResult(temp, candidates)
//         } else if (temp == 0) {
//             result.push(candidates[i])
//             results.push(result)
//             return results
//         }else{
//             return results
//         }
//     }
// }

var combinationSum = function (candidates, target) {
    let results = [] //所有答案
    let result = [] //某个答案
    getResult(candidates.sort(sortNum),target,0)
    return results

    function getResult(candidates, leftTarget,index) {
        if (leftTarget > 0) {
            for (let i = index; i < candidates.length; i++) {
                let left = leftTarget - candidates[i]
                if (left < 0) {
                    break
                } else {
                    result.push(candidates[i]) 
                    getResult(candidates,left,i)
                    result.pop()
                    // console.log("当前result数组的值 "+result)
                }
            }
        }else if(leftTarget==0){
            results.push(result.slice())
            return 
        }else{
            return
        }
    }
    //排序
    function sortNum(a,b){
        return a-b;
    }

};

console.log(combinationSum([3,12], 15))