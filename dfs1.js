/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let row=grid.length
    let column=grid[0].length
    let count=0
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(grid[i][j]=="1"){
                dfs(i,j)
                count++
            }
        };
    }
    function dfs(i,j){
        if(i<0||j<0||i>=row||j>=column){
            return
        }
        // console.log(grid[i][j])
        if(grid[i][j]=="0"){
            return
        }
        grid[i][j]=0
        dfs(i+1,j)
        dfs(i,j+1)
        dfs(i-1,j)
        dfs(i,j-1)
    }
    return count
 };
 console.log(numIslands( [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  
  ))