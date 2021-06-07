//计算质数，埃式筛
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrim=new Array(n).fill(1)
    let ans=0
    for(let i=2;i<n;i++){
        if(isPrim[i]){
            ans++
            for(let j=i*i;j<n;j+=i){
                isPrim[j]=0
            }
        }
    }
    return ans
};