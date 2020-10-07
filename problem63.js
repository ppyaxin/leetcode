/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length; //行的数量
    let n = obstacleGrid[0].length; //列的数量
    let hasOne = false
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] == 1) {
            obstacleGrid[i][0] = -1
            hasOne = true
        } else if (!hasOne) {
            obstacleGrid[i][0] = 1
        }
        console.log("第" + (i + 1) + "行第一列值为：" + obstacleGrid[i][0])
    }
    if(obstacleGrid[0][0]!=-1){
            hasOne = false
    }

    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] == 1) {
            obstacleGrid[0][j] = -1
            hasOne = true
        } else if (!hasOne) {
            obstacleGrid[0][j] = 1
        }
        console.log("第1行第" + (j + 1) + "列值为：" + obstacleGrid[0][j])
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                obstacleGrid[i][j] = -1
            } else {
                if (obstacleGrid[i - 1][j] > 0) {
                    obstacleGrid[i][j] += obstacleGrid[i - 1][j]
                }
                if (obstacleGrid[i][j - 1] > 0) {
                    obstacleGrid[i][j] += obstacleGrid[i][j - 1]
                }
            }
            console.log("第" + (i + 1) + "行" + (j + 1) + "列值为：" + obstacleGrid[i][j])
        }
    }
    if(obstacleGrid[m - 1][n - 1]<0){
        return 0
    }
    return obstacleGrid[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([
    [1,0]
]))

// 动态规划的题目分为两大类，一种是求最优解类，典型问题是背包问题，另一种就是计数类，比如这里的统计方案数的问题，它们都存在一定的递推性质。
// 前者的递推性质还有一个名字，叫做 「最优子结构」 ——即当前问题的最优解取决于子问题的最优解，
// 后者类似，当前问题的方案数取决于子问题的方案数。所以在遇到求方案数的问题时，我们可以往动态规划的方向考虑

//可以设置一个新的二维数组，改变值比较麻烦