/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    let row = matrix.length
    let column = matrix[0].length
    let temp = 0
    for (let i = 0; i < row; i++) {
        for (let j = temp; j < column; j++) {
            if(matrix[i,j]>target){
                temp=j-1
                break
            }
            if (matrix[i][j] == target) {
                return true
            }
        }
    }
    return false
};
let m = [
[1,1]
]

console.log(findNumberIn2DArray(m, 1))