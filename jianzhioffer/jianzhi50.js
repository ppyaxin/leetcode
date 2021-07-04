/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    let map=new Map()
    for(let i=0;i<s.length;i++){
        // console.log(map)
        if(map.has(s[i])){
            map.set(s[i],true)
        }else{
            map.set(s[i],false)
        }
    }
    for (let [key, value] of map) {
        // console.log(key, value);
        if(value==false){
            return key
        }
       }
       return []
};

console.log(firstUniqChar("accdeff"))