//封装函数 f，使 f 的 this 指向指定的对象
function bindThis(f, oTarget) {
    return f.bind(oTarget)
}
//call apply 会立即执行，bind会返回函数
function bindThis(f, oTarget) {
    return function(){
         return f.apply(oTarget,arguments);
    }
}

//使用apply调用函数
// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
