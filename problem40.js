/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let results = [] //所有答案
    let result = [] //某个答案
    getResult(candidates.sort(sortNum), target, 0)
    return results

    function getResult(candidates, leftTarget, index) {
        if (leftTarget > 0) {
            for (let i = index; i < candidates.length; i++) {
                let left = leftTarget - candidates[i]
                if (left < 0) {
                    break
                } else if (candidates[i]==candidates[i-1]&&i>index){
                    continue
                }else {
                    result.push(candidates[i])
                    getResult(candidates, left, i + 1)
                    result.pop()
                }
            }
        } else if (leftTarget == 0) {
            results.push(result.slice())
            return
        } else {
            return
        }
    }
    //排序
    function sortNum(a, b) {
        return a - b;
    }

};

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8))