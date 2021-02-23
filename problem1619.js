/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
    let result = []
    let index = 0
    let fa = []
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land.length[0]; j++) {
            if (land[i][j] == 0) {
                //标记池塘
                land[i][j] = index
                //将父池塘设为自己
                fa[index] = index
                //判断左边上边有没有水域
                //上边三个
                if (i > 0) {
                    if (j > 0) {
                        if (land[i - 1][j - 1] >= 0) {
                            //把两个池塘设置成同一个爹
                            merge(land[i][j],land[i-1][j-1])
                        }
                    }
                    if (land[i - 1][j] >= 0) {
                        //把两个池塘设置成同一个爹
                        merge(land[i][j],land[i-1][j])
                    }
                    if (j < land.length[0] - 1) {
                        if (land[i - 1][j + 1] >= 0) {
                            //把两个池塘设置成同一个爹
                            merge(land[i][j],land[i-1][j+1])
                        }
                    }
                }
                //左边一个
                if (j > 0) {
                    if (land[i][j - 1] >= 0) {
                        //把两个池塘设置成同一个爹
                        merge(land[i][j],land[i][j-1])
                    }
                }
                index++
            }else{
                land[i][j]==-1
            }
        }
    }

    //统计池塘
    let sum = []
    for (let i = 0; i < fa.length; i++) {
        sum[i] = 0
    }
    for (let i = 0; i < fa.length; i++) {
        for (let j = 0; j < fa.length; j++) {
            if (fa[j] == i) {
                sum[i]++
            }
        }
        if (sum[i] > 0) {
            result.push(sum[i])
        }
    }
    return result
};

//并查集的查询
function find(x) {
    if (fa[x] == x) {
        return x
    } else {
        return find(fa[x])
    }
}
//并查集的合并
function merge(x, y) {
    fa[find(x)] = find(y)
}

console.log(pondSizes([
    [0,2,1,0],
    [0,1,0,1],
    [1,1,0,1],
    [0,1,0,1]
  ]))