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
            if(dfs(i,j,0)){
                return true
            }
        }
    }
    return false
    function dfs(i, j, index) {
        if(index==word.length){
            return true
        }
        
        if (board[i][j] == word[index]) {
            // board[i][j] = 0
            console.log(i,j,board[i][j],index)
            if (i + 1 < row) {
                dfs(i + 1, j, ++index)
            } else if (i > 0) {
                dfs(i - 1, j, ++index)
            } else if (j + 1 < column) {
                dfs(i, j + 1, ++index)
            } else if (j > 0) {
                dfs(i, j - 1, ++index)
            }
        }else{
            // board[i][j]=0
            return
        }
    }
};
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"
console.log(exist(board,word))