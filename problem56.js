/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// https://leetcode-cn.com/problems/merge-intervals/
var merge = function (intervals) {
    //根据每个数组元素的第一个值进行排序
    function sortNum(a, b) {
        return a[0] - b[0]
    }
    intervals.sort(sortNum)
    let answerlength=0
    for(let i=1;i<intervals.length;i++){
        if(intervals[answerlength][1]>=intervals[i][0]){
            intervals[answerlength][1]=Math.max(intervals[answerlength][1],intervals[i][1])
        }else{
            answerlength++
            intervals[answerlength]=intervals[i]
        }
    }
    return intervals.slice(0,answerlength+1)
};

console.log(merge([[1,4],[2,3]]))