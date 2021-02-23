/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// var maximumScore = function (a, b, c) {
//     let str = []
//     str[0] = a
//     str[1] = b
//     str[2] = c
//     str.sort(sortNum)
//     let score=str[0]
//     let temp=str[2]-str[1]
//     if(temp>=score){
//         return score+Math.min(str[2]-str[0],str[1])
//     }else{
//         temp=score-temp
//         if(temp%2==1){
//             temp++
//         }
//         let left=str[1]-temp/2
//         return score+left
//     }
// };
//排序
var maximumScore = function (a, b, c) {

   return Math.min(a+b,b+c,a+c,parseInt((a+b+c)/2))
};

function sortNum(a, b) {
    return a - b;
}

console.log(maximumScore(1,8,8))