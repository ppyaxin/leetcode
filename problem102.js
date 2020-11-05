function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//层次遍历
var levelOrder = function(root) {
    let res=[]
    let queue=[]
    queue.push(root)
    while(queue.length!=0){
        res.push([])
        let size=queue.length
        for(let i=0;i<size;i++){
            let temp=queue.shift()
            res[res.length-1].push(temp.val)
            console.log(res)
            if(temp.left.val){
                queue.push(temp.left)
            } 
            if(temp.right.val) queue.push(temp.right)
        }
    }
    return res
};
//给一个数组建立一个树
var makeTree=function(array){
    let queue=[]
    let root=new TreeNode(array[0])
    let count=1
    queue.push(root)
    while(count<array.length-1){
        let left=new TreeNode(array[count])
        let right=new TreeNode(array[count+1])
        let temp=queue.shift()
        temp.left=left
        temp.right=right
        queue.push(left)
        queue.push(right)
        count+=2
    }
    if(count==array.length-1){
        let left=new TreeNode(array[count])
        let temp=queue.shift()
        temp.left=left
    }
    return root
 };
 let tree=makeTree([3,9,20,null,null,15,7])
 console.log(tree)
 console.log(levelOrder(tree))
 