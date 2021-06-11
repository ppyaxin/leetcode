/**
 * @param {number} n
 * @return {number}
 */

var numWays = function (n) {
    if (n == 0) {
        return 1
    } else if (n == 1) {
        return 1
    }
    let a = 1
    let b = 1
    for (let i = 1; i < n; i++) {
        let temp = (a + b)%1000000007
        a = b
        b = temp
        // console.log(b)
    }
    return b%1000000007
};
console.log(numWays(2))