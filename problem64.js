/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;//行的数量
    let n = grid[0].length;//列的数量
    for(let i=1;i<m;i++){
        grid[i][0]+=grid[i-1][0]
        console.log("第"+(i+1)+"行第一列值为："+grid[i][0])
    }
    for(let j=1;j<n;j++){
        grid[0][j]+=grid[0][j-1]
        console.log("第1行第"+(j+1)+"列值为："+grid[0][j])
    }
    for (let i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
             if(grid[i-1][j]<grid[i][j-1]){
                 grid[i][j]+=grid[i-1][j]
             }else{
                 grid[i][j]+=grid[i][j-1]
             }  
             console.log("第"+(i+1)+"行"+(j+1)+"列值为："+grid[i][j])   
        }
    }
    return grid[m-1][n-1]
};

let grid=[[1,2,5],[3,2,1]]
console.log(minPathSum(grid))