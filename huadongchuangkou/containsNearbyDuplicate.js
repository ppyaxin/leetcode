/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let subString = new Set()
    let start = 0
    for (let i = 0; i < s.length; i++) {
        if (!subString.has(s[i])) {
            subString.add(s[i])
        } else {
            while (s[start] != s[i]) {
                //开始指针向右移动时候的要删除集合里对应的元素
                subString.delete(s[start])
                start++
            }
            start++
        }
        let length=i-start
        if(length<=k){
            return true
        }
    }
    return false
};