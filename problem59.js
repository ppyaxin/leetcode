/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n == 0) return []
    let up = false,
        down = false,
        left = false,
        right = true
    let result = []
    let rowstart = columnstart = 0
    let columnend = n - 1
    let rowend = n - 1
    let number = n * n
    let element = 1
    for (let i = 0; i < n; i++) {
        result[i] = []
    }
    while (element <= number) {
        if (right) {
            // console.log("clsta end"+columnstart+columnend)
            for (let i = columnstart; i <= columnend; i++) {
                result[rowstart][i] = element
                element++
            }
            //console.log(result)
            rowstart++
            //console.log("rowstart"+rowstart)
            right = false
            down = true
        }
        if (down) {
            for (let i = rowstart; i <= rowend; i++) {
                result[i][columnend] = element
                element++
            }
            //console.log(result)
            columnend--
            //console.log("colend"+columnend)
            down = false
            left = true
        }
        if (left) {
            for (let i = columnend; i >= columnstart; i--) {
               result[rowend][i] = element
                element++
            }
            //console.log(result)
            rowend--
            //console.log("rowend"+rowend)
            left = false
            up = true
        }
        if (up) {
            for (let i = rowend; i >= rowstart; i--) {
                result[i][columnstart] = element
                element++
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
console.log(generateMatrix(3))