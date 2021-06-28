 //sort的基本使用
  let arr = [8, 1, 4, 3, 7, 9]
  let Arr = [21, 55, 29, 105, 45]
  console.log(arr.sort()) //[1, 3, 4, 7, 8, 9]
  console.log(Arr.sort()) // [105, 21, 29, 45, 55]

由上述代码可知：sort()方法只能对0-9以内的数组进行正确排序，两位数以上的数组项虽然给出了返回值，但却并不是排序后的结果。这是因为sort()是内部做的是根据ASCLL码进行排序的，并不是根据数值大小排序。
重点来了：sort()可以接收一个携带两个形参的callback（a,b）,即a、b是两个即将要比较大小的元素，且必须要有返回值。

当callback的返回值是正数时、那么 b 会被排列到 a 之前；

当callback的返回值是负数时、那么 a 会被排列到 b 之前；

当callback的返回值是为 0 时、那么 a 与 b 的位置保持不变；

sort每执行一次会根据返回值调换两个参数a、b在原数组中的位置；


  let Arr = [56, 21, 29, 105, 45]
  Arr.sort(function(a, b) { //callback
      if (a > b) { // a b 分别是Arr中的 56 21
          return 1  //返回正数 ，b排列在a之前
      } else {
          return -1 //返回负数 ，a排列在b之前
      }
  }
  最终版 
  Arr.sort((a, b) => a - b) 
  https://blog.csdn.net/qq_43471802/article/details/104007081