/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
    let results = []
    let iLength = land.length
    let jLength = land[0].length
    for (let i = 0; i < iLength; i++) {
        for (let j = 0; j < jLength; j++) {
            let count = deepSearch(i, j)
            if (count > 0) results.push(count)
        }
    }

    function deepSearch(i, j) {
        let count = 0
        if (land[i][j] == 0) {
            // 找到一个点是池塘
            console.log("search", i, j)
            count++
            land[i][j] = -1
            // 周围8点，上下左右，是否有墙
            for (let x = Math.max(0, i - 1); x < Math.min(i + 2, iLength); x++) {
                for (let y = Math.max(0, j - 1); y < Math.min(j + 2, jLength); y++) {
                    count += deepSearch(x, y)
                }
            }
        }
        return count
    }

    return results
};
console.log(pondSizes(
    [
        [0, 2, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 1, 0, 1]
    ]
))