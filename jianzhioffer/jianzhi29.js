/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if(matrix.length==0) return []
    let [right, down, left, up] = [true, false, false, false]
    let row = matrix.length-1
    let column = matrix[0].length-1
    let startRow = 0
    let startColumn = 0
    let hasSpiral = (row+1) * (column+1)
    let result = []
    while (hasSpiral > 0) {
        // console.log(right)
        if (right) {
            for (let i = startColumn; i <=column; i++) {
                // console.log(result,matrix[startRow][i])
                result.push(matrix[startRow][i])
                hasSpiral--
            }
            startRow++
            right=false
            down=true
        } else if (down) {
           for(let i=startRow;i<=row;i++){
               result.push(matrix[i][column])
               hasSpiral--
           }
           column--
           down=false
           left=true
        } else if (left) {
           for(let i=column;i>=startColumn;i--){
               result.push(matrix[row][i])
               hasSpiral--
           }
           row--
           left=false
           up=true
        } else if (up) {  
           for(let i=row;i>=startRow;i--){
               result.push(matrix[i][startColumn])
               hasSpiral--
           }
           startColumn++
           up=false
           right=true
        }
    }
    return result
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
