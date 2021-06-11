/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) return n
    let a=0
    let b=1
    for(let i=1;i<n;i++){
       let c=(a+b)%1000000007
       a=b,
    //    console.log(a)
       b=c
    }
    return b%1000000007
};
console.log(fib(81))