/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let result = 0;
  for (let m = 2; m <= n; m++) {
    let a = parseInt(n / m);
    let b = a + 1;
    let bNum = n - a * m;
    let pow = 1;
    for (let i = 0; i < bNum; i++) {
      pow *= b;
    }
    for (let i = bNum; i < m; i++) {
      pow *= a;
    }
    result = Math.max(result, pow);
  }
  return result;
};

var cuttingRope = function (n) {
  if (n == 2) return 1;
  if (n == 3) return 2;
  let num2 = n % 3;
  let result = 1;
  if (num2 == 1) {
    result = 4;
  } else if (num2 == 2) {
    result = 2;
  }
  let num3 = (n - result) / 3;
  for (let i = 0; i < num3; i++) {
    result *= 3;
  }
  return result;
};

var cuttingRope = function (n) {
  if (n == 2) return 1;
  if (n == 3) return 2;
  let num2 = n % 3;
  let result, num3;
  if (num2 == 0) {
    result = 1;
    num3 = parseInt(n / 3);
  } else if (num2 == 1) {
    result = 4;
    num3 = parseInt((n - 2) / 3);
  } else if (num2 == 2) {
    result = 2;
    num3 = parseInt((n - 1) / 3);
  }
  for (let i = 0; i < num3; i++) {
    result *= 3;
  }
  return result;
};

var cuttingRope = function (n) {
  if (n == 2) return 1;
  if (n == 3) return 2;
  let p=new Array(n+1)
  p[2]=2
  p[3]=3
  for(let i=4;i<=n;i++){
      p[i]=0
     for(let j=2;j<i;j++){
         p[i]=Math.max(p[i],p[j]*(i-j))
     }
  }
  return p[n]
};
