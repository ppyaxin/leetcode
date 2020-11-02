/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if(matrix.length==0) return []
    let up = false,
        down = false,
        left = false,
        right = true
    let result = []
    let rowstart = columnstart = 0
    let columnend = matrix[0].length - 1 //最大列数
    let rowend = matrix.length - 1 //最大行数
    let number=matrix.length*matrix[0].length
    while (result.length < number) {
        if (right&&result.length<number) {
           // console.log("clsta end"+columnstart+columnend)
            for (let i = columnstart; i <= columnend; i++) {
                result.push(matrix[rowstart][i])
            }
            //console.log(result)
            rowstart++
            //console.log("rowstart"+rowstart)
            right = false
            down = true
        }
        if (down&&result.length<number) {
            for (let i = rowstart; i <= rowend; i++) {
                result.push(matrix[i][columnend])
            }
            //console.log(result)
            columnend--
            //console.log("colend"+columnend)
            down = false
            left = true
        }
        if (left&&result.length<number) {
            for (let i = columnend; i >= columnstart; i--) {
                result.push(matrix[rowend][i])
            }
            //console.log(result)
            rowend--
            //console.log("rowend"+rowend)
            left = false
            up = true
        }
        if (up&&result.length<number) {
            for (let i = rowend; i >= rowstart; i--) {
                result.push(matrix[i][columnstart])
            }
           // console.log(result)
            columnstart++
           // console.log("columnstart"+columnstart)
            up = false
            right = true
        }
    }
    return result
};

console.log(spiralOrder([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
       ]
))