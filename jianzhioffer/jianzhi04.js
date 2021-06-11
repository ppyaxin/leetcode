/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
     let row=matrix[0].length
     let column=matrix.length
     let temp=0
     for(let i=0;i<row;i++){
         for(let j=temp;j<column;j++){
             if(matrix[i][j]>target){
                 if(j>0){
                     temp=j-1
                 }
                 break
             }else if(matrix[i][j]==target){
                 return true
             }else{
                 return false
             }
         }
     }
     return false
};
let m=[
   [1,1]
  ]
  console.log(findNumberIn2DArray(m,0))