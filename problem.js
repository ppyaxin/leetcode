function getNum(str) {
    let obj = new Set()
    let test = new Map()
    for (let i = 0; i <= str.length; i++) {
        if (!obj.has(str[i])) {
            test.set(str[i], 1)
            obj.add(str[i])
        } else {
            let temp = test.get(str[i])++
            test.set(str[i], temp)
        }
    }
    return test
}

//删除排序数组的重复项
function deleteNum(str) {
    // let index=1
    // for(let i=0;i<str.length-1;i++){
    //     if(str[i]==str[i+1]){
    //         str[index]=str[i+2]
    //     }else{
    //         index++
    //     }
    // }
    // return str
}
function deleteNum(str) {
    let result = []
    result.push(str[0])
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i + 1] != str[i]) {
            result.push(str[i + 1])
        }
    }
    return result
}
// console.log(deleteNum([1,1,2,2,3,4]))
//找出下标和为某数的整数，返回下标
function getIndex(str, target) {
    for (let i = 0; i < str.length; i++) {
        let left = target - str[i]
        for (let j = i; j < str.length; j++) {
            if (str[j] == left) {
                let result = []
                result[0] = i
                result[1] = j
                return result
            }
        }
    }
    return null;
}
console.log(getIndex([2, 7, 11, 15], 9))

//找出和为0且不重复的三元组
function getSum(str) {
    let result = new Set()
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            for (let k = 0; k < str.length; k++) {
                if (str[i] + str[j] + str[k] != 0) {
                   let temp=[]
                   temp.push(str[i],str[j],str[k])
                }
            }
        }
    }
    return result
}
console.log(getSum([-1, 0, 1, 2, -1, 4]))

//js深度克隆
function getClone(obj,o) {
  let t=Object.prototype.toString.call(obj).slice(10,-1)
  if(type==="object"){
      o={}
      for(key in obj){
          o[k]=getClone(obj[k])
      }
  }else if(type==="Arry"){
      o=[]
      for(let i=0;i<obj.length;i++){
          o.push(clone(obj[i]))
      }
  }else{
      o=obj
  }
  return o
}
