/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let board =new Array()
    for (let i = 0; i < m; i++) {
        board[i]=new Array()
        for (let j = 0; j < n; j++) {
            board[i][j] = 1
        }
    }
    console.log(board)
    
    let count = 0
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= m || y >= n) {
            return
        }
        let sum =getSum(x)+getSum(y)
        if (sum > k) {
            return
        }
        if (board[x][y] == 1) {
            count = count + 1
            board[x][y] = 0
        }
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }
    dfs(0, 0, 0)
    return count
};

function getSum(x) {
    let sum = 0
    while (x > 0) {
        sum = sum + x % 10
        x =parseInt(x / 10) 
    }
   return sum
}
console.log(getSum(2))
console.log(movingCount(2,3,1))