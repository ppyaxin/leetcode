/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let length = s.length
    let result = ""
    let tempIndex = s.length
    for (let i = length - 1; i >= 0;) {
        if (s[i] == ' ') {
            //有空格  
            result = result + ' ' + s.slice(i + 1, tempIndex)
            // console.log(result, i, tempIndex)
            while (s[i] == ' ') {
                i--
            }
            tempIndex = i + 1
        } else {
            i--
        }
    }
    if (tempIndex != 0) {
        result = result + ' ' + s.slice(0, tempIndex)
    }
    for (let i = 0; ;) {
        if (result[i] == ' ') {
            i++
        } else {
            return result.slice(i)
        }
    }
};
console.log(reverseWords(" hello world!  "))