function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//层次遍历
var levelOrder = function(root) {
    if(!root) return []
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
            if(temp.left)  queue.push(temp.left)
            if(temp.right) queue.push(temp.right)
        }
    }
    return res
};
//给一个数组建立一个树
var makeTree = function (array) {
    let queue = []
    let root = new TreeNode(array[0])
    let count = 1
    queue.push(root)
    while (count < array.length - 1) {
        let temp = queue.shift()
        if (array[count]) {
            let left = new TreeNode(array[count])
            temp.left = left
            queue.push(left)
        }
        if (array[count + 1]) {
            let right = new TreeNode(array[count + 1])
            temp.right = right
            queue.push(right)
        }
        count += 2
    }
    if (count == array.length - 1) {
        let left = new TreeNode(array[count])
        let temp = queue.shift()
        temp.left = left
    }
    return root
};

 let tree=makeTree([])
 console.log(tree)
 console.log(levelOrder(tree))
 