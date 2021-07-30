
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法 
function getUrlParam(sUrl, sKey) {
    var paramArr = sUrl.split('?')[1].split('#')[0].split('&')
    const obj={};
    paramArr.forEach(element=>{
        const [key,value]=element.split('=')
        if(obj[key]== null){
            obj[key] =value
        }else{
            obj[key]=[].concat(obj[key],value)
        }
    })
   if(sKey){
     return obj[sKey] || ""
   }
    return obj
}

// stringObject.split(separator,howmany)
// 返回值

// 一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。

// 但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。

