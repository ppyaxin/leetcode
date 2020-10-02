/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
    let count = 0
    getPath(m, n)

    function getPath(right, down) {
        if (right == 1 || down == 1) {
            count++
            return
        }
        for (let i = 0; i < 2; i++) { //i=0向右走，i=1向下走
            if (i == 0 && right > 1) {
                getPath(right - 1, down)
            }
            if (i == 1 && down > 1) {
                getPath(right, down - 1)
            }
        }
    }
    return count;
};

//动态规划
var uniquePaths3 = function (m, n) {
    // 动态规划
    // 时间复杂度 O(n^2)
    // 空间复杂度 O(n^2)
    let dp = Array.from(
        { length: m },
        () => Array.from(
            { length: n },
            () => 0
        )
    )
    // 第一列的走法只有一种
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    // 第一行的走法只有一种
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            for (let k = 0; k <= i; k++) {
                dp[i][j] += dp[k][j - 1]
            }
            // console.log("第"+(i+1)+"行第"+(j+1)+"列的值为："+dp[i][j])
        }
    }
    return dp[m - 1][n - 1]
};

//动态规划题解
var uniquePaths2 = function (m, n) {
    // 动态规划
    // 时间复杂度 O(n^2)
    // 空间复杂度 O(n^2)
    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))
    // 第一列的走法只有一种
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    // 第一行的走法只有一种
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 当前位置是从左边或上边走过来的
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};


console.log(uniquePaths(5, 6))
console.log(uniquePaths2(5, 6))
console.log(uniquePaths3(5, 6))