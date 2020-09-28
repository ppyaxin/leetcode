/**
 * @param {number} n
 * @return {number}
 */
// let count = 0
// var climbStairs = function (n) {
//     while (n > 0) {
//         if (n - 1 >= 0) {
//             console.log("现在的阶梯数为：" + n)
//             count++
//             console.log("现在count值为：" + count)
//             climbStairs(n--)
//         }
//         if (n - 2 >= 0) {
//             n -= 2
//             console.log("现在的阶梯数为：" + n)
//             count++
//             console.log("现在count值为：" + count)
//             climbStairs(n)
//         }
//     }
//     return count
// };

//一道简单的动态规划问题
var climbStairs = function(n) {
    let p=0,q=0,r=1;
    for(let i=0;i<n;i++){
        p=q
        q=r
        r=p+q
    }
    return r
};

console.log(climbStairs(3))