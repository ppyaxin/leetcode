/**
 * @param {string} s
 * @return {string[]}
 */

// join() 方法用于把数组中的所有元素放入一个字符串。
// 元素是通过指定的分隔符进行分隔的。
var restoreIpAddresses = function (s) {
    let length = s.length
    if (length > 12) return []
    let results = []
    let result = []
    function getResult(leftstring, index) {
        function resultPush(i) {
            result.push(leftstring.slice(0, i))
            getResult(leftstring.substr(i), index + 1)
            result.pop()
        }
        if (index > 4) {
            if (leftstring.length == 0) {
                results.push(result.join("."))
            }
            return
        }
        if (leftstring.length == 0) return
        resultPush(1)
        if (leftstring.slice(0, 2) >= 10) {
            resultPush(2)
        }
        if (leftstring.slice(0, 3) >= 100 && leftstring.slice(0, 3) <= 255) {
            resultPush(3)
        }

    }
    getResult(s, 1)
    return results
};

console.log(restoreIpAddresses("1111"))