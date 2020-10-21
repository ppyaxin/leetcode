/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = []
    let column = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                row.push(i)
                column.push(j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (row.includes(i)) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[i][j] = 0
            }
        }
    }

    for (let j = 0; j < matrix[0].length; j++) {
        if (column.includes(j)) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};

console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]))