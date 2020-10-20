/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let count = 0
    while (str[count] == " ") {
        count++
    }
    let start = count
    if (str[count] == "-" || str[count] == "+") {
        count++
    }
    while (/^[0-9]*$/.test(str[count])) {
        count = count + 1
    }
    let result = parseInt(str.substring(start, count))
    if (isNaN(result)) return 0
    let max = Math.pow(2, 31) - 1
    let min = Math.pow(-2, 31)
    if (result > max) {
        return max
    } else if (result < min) {
        return min
    } else {
        return result
    }
};

console.log(myAtoi("0004193"))