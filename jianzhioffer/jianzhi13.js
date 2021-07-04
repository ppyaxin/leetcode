/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let board = new Array(m * n).fill(false);

  let maxSize = Math.max(m, n);
  let sum = new Array(maxSize);
  for (let i = 0; i < maxSize; i++) {
    sum[i] = getSum(i);
  }
  function dfs(x, y) {
    //出界不能走
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return 0;
    }
    //走过的不能走
    let i = x * n + y;
    if (board[i]) {
      return 0;
    }
    board[i] = true;
    //数位和大于k不能走
    if (sum[x] + sum[y] > k) {
      return 0;
    }

    //可以走，标记走过了
    return 1 + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
  }
  return dfs(0, 0);
};

function getSum(x) {
  let sum = 0;
  while (x > 0) {
    sum = sum + (x % 10);
    x = parseInt(x / 10);
  }
  return sum;
}

function main() {
  console.log(getSum(2345));
  console.log(movingCount(3, 1, 0));
}

main();
