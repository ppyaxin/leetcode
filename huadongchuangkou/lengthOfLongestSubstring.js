/**
 * @param {string} s
 * @return {number}
 */
//要点：有一个set记录字母有没有出现过
//更新最长长度
//如果出现率重复的，移动开始指针到重复元素第一次出现的地方
//移动开始指针时，记得删除集合里元素
var lengthOfLongestSubstring = function (s) {
    let subString = new Set()
    let maxLength = 0
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
        maxLength=Math.max(maxLength,i-start+1)
    }
    return maxLength
};