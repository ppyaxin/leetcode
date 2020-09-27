/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//https://leetcode-cn.com/problems/combinations/solution/
var combine = function(n, k) {
    let result=[]
    let results=[]
    function getResult(){
        if(result.length==k){
            results.push(result.slice())
            return
        }
        for(let i=0;i<n;i++){
            //console.log("数组目前的最后一个值为："+result[result.length-1])
            if(result.length>0&&i<result[result.length-1]){
                continue
            }else{
                result.push(i+1)
                //console.log("push后的reult："+result)
                getResult()
                //console.log("pop前的reult："+result)
                result.pop()
                //console.log("pop后的reult："+result)
            }
        }
    }
    getResult()
    return results
};
//leetcode参考答案
var combine2 = function(n, k) {
    const ans = [];
    const dfs = (cur, n, k, temp) => {
        // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        // 记录合法的答案
        if (temp.length == k) {
            ans.push(temp);
            return;
        }
        // 考虑选择当前位置
        dfs(cur + 1, n, k, [...temp, cur]);
        // 考虑不选择当前位置
        dfs(cur + 1, n, k, temp);
    }
    dfs(1, n, k, []);
    return ans;
};


console.log(combine2(4,2))