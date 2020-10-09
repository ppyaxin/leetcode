/**
 * @param {string} s
 * @return {string[]}
 */
//复原ip地址
// var restoreIpAddresses = function(s) {
//     let length=s.length
//     if(length>12) return
//     let results=[]
//     let result=""
//     function getResult(index,leftstring,number){//index是第几个字节，number是一个字节有几个数字
//         let minNumber=Math.min(leftstring-(4-index)*3,1) 
//         let maxNumber=Math.min(leftstring-(4-index)*1,3) 
//         for(let i=minNumber;i<=maxNumber;i++){
//             if(leftstring.charAt(i)==0){
//                 continue
//             }else{
//                 let temp=leftstring.substr(0,i)
//                 leftstring=leftstring.substr(i)
//                 result=result+"."+temp
//             }
//         }
//     }
// };

// join() 方法用于把数组中的所有元素放入一个字符串。
// 元素是通过指定的分隔符进行分隔的。
var restoreIpAddresses = function (s) {
    let length = s.length
    if (length > 12) return []
    let results = []
    let result = []
    function getResult(leftstring, index) {
        if (index > 4) {
            console.log("当前result为："+result)
            if(leftstring.length==0){
                results.push(result.join("."))
            }
            return
        }
        // let minNumber = Math.min(leftstring - (4 - index) * 3, 1)
        // let maxNumber = Math.min(leftstring - (4 - index) * 1, 3)
        for (let i = 1; i <= 3; i++) {
            if(leftstring.length==0){
                break
            }
            let num=parseInt(leftstring.slice(0,i))
            console.log("当前数字为："+num)
            if(i==1){
                result.push(num)
                console.log("当前result为："+result)
                getResult(leftstring.substr(i),index+1)
                result.pop()
            }
            if(i==2){
               if(num<10){
                   continue
               }else{
                   result.push(num)
                   console.log("当前result为："+result)
                   getResult(leftstring.substr(i),index+1)
                   result.pop()
               }
            }
            if(i==3){
                if(num<100||num>255){
                    continue
                }else{
                    result.push(num)
                    console.log("当前result为："+result)
                    getResult(leftstring.substr(i),index+1)
                    result.pop() 
                }
            }
        }
    }
    getResult(s,1)
    return results
};
console.log(restoreIpAddresses("102131342341023"))