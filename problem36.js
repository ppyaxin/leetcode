/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set()
        let columnSet = new Set()
        for (let j = 0; j < 9; j++) {
            //检查行
            if (rowSet.has(board[i][j]) && board[i][j] != '.') {
                return false
            } else {
                rowSet.add(board[i][j])
                //   console.log("rowset" + board[i][j])
            }
            //检查列
            if (columnSet.has(board[j][i]) && board[j][i] != '.') {
                //  console.log("columnsetdddddd" + board[j][i])
                return false

            } else {
                //  console.log("columnset" +   board[j][i])
                columnSet.add(board[j][i])
            }
            //检查九宫格
            let nineSet = new Set()
            if (i % 3 == 0 && j % 3 == 0) {
                for (let m = i; m < i+3; m++) {
                    for (let n = j; n < j+3; n++) {
                        if (nineSet.has(board[m][n]) && board[m][n] != '.') {

                            return false
                        } else {

                            //  console.log("nineset" + board[m][n])
                            nineSet.add(board[m][n])
                        }
                    }
                }
            }
        }
    }
    return true
};
let board = [
[".", ".", ".", ".", "5", ".", ".", "1", "."], 
[".", "4", ".", "3", ".", ".", ".", ".", "."],
[".", ".", ".", ".", ".", "3", ".", ".", "1"],
["8", ".", ".", ".", ".", ".", ".", "2", "."], 
[".", ".", "2", ".", "7", ".", ".", ".", "."],
[".", "1", "5", ".", ".", ".", ".", ".", "."], 
[".", ".", ".", ".", ".", "2", ".", ".", "."], 
[".", "2", ".", "9", ".", ".", ".", ".", "."],
[".", ".", "4", ".", ".", ".", ".", ".", "."]]



console.log(isValidSudoku(board))