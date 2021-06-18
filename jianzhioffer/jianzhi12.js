/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let row = board.length
    let column = board[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }
    return false
    function dfs(i, j, index) {
        // console.log(i, j, "index" + index)
        if (i < 0 || i >= row || j < 0 || j >= column || board[i][j] != word[index]) {
            return false
        }
        if (index === word.length - 1) {
            return true
        } 
            board[i][j]=''
            // 为啥++不行index++/+1可以
            
            let res=dfs(i + 1, j, index++) || dfs(i - 1, j, index++) || dfs(i, j + 1, index++) || dfs(i, j - 1, index++)
            board[i][j]=word[index]
            return res

    }
};
var exist1 = function(board, word) {
    // 二维数组跟树不同 做DFS的时候 有不同的起点
    for(let i=0;i<board.length;i++){
        // 因为是矩阵 board[0]
      for(let j=0;j<board[0].length;j++){
        if(dfs(i,j,0)){
          return true
        }
      }
    }
    return false
  
    // DFS 最后一步拿到结果 回溯的时候 上层（栈底）才能拿到值
    function dfs(i,j,k){
      // 递归的base case
      if(i<0||j<0||i>=board.length||j>=board[0].length||board[i][j]!==word[k]){
        return false
      }
      if(k===word.length-1){
        console.log('k',k)
        return true
      }
      board[i][j] ='' // 标记下已经查找过的
      // !上下左右 每次进去 k+1==>表示 走了多少步
      let res =dfs(i-1,j,k+1)||dfs(i+1,j,k+1)||dfs(i,j-1,k+1)||dfs(i,j+1,k+1)
      // 撤销
      board[i][j]=word[k]
      return res
    }
  };
  
let board = [["A"]]
let word = "AB"
console.log(exist(board, word))