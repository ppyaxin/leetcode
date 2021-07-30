/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results=[]
    let result = new Set()
    dfs()
    function dfs(){
        console.log(result.size)
        if(result.size==nums.length){
            results.push([...result])
            return
        }
        for(let item of nums){
            if(!result.has(item)){
               result.add(item)
            }else{
                continue
            }
            dfs()
            let temp=[...result]
            result.delete(temp[temp.length-1])
        }
        
    }
    return results
};

console.log(permute([1,2,3]))