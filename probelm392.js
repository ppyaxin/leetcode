/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

//我的解法
var isSubsequence = function (s, t) {
    let first = s[0],
        next = s[1]
    let k = 0
    if (k == s.length) return true
    if (s.length == t.length == 1 && s != t) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] == first) {
            first = next
            console.log("目前的first值为：" + first)
            k++
            console.log("目前的k值为：" + k)
            console.log("目前的s[k]值为：" + s[k])
            next = s[k + 1]
            console.log("目前的next值为：" + next)
        }
        if (k == s.length) {
            return true
        }
    }
    return false
};

//动态规划答案解答
var isSubsequence = function(s, t) {
    if(s.length === 0) return true
    let sn = s.length
    let tn = t.length
    let dp = Array.from(Array(sn+1),()=>Array(tn+1).fill(false))
    dp[0][0] = true
    dp[0].fill(true)
    for(let i=1;i<sn+1;i++){
        for(let j=i;j<tn+1;j++){
            if(dp[i][j-1] || (dp[i-1][j-1] && s[i-1]===t[j-1])){
                dp[i][j] = true
            }
        }
    }
    return dp[sn][tn]
}

console.log(isSubsequence("acb", "ahbjdc"))