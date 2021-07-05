/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   if(n<2) return n
   let a=0,b=1,c=1
   for(let i=0;i<n.length-2;i++){
       a=b
       b=c
       c=a+b
   }
   return c
};