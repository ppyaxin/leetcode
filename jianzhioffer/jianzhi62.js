/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
//约瑟夫环
var lastRemaining = function(n, m) {

       let x=0
       for(let i=2;i<n;i++){
           x=(x+m)%i
       }
       return x
};