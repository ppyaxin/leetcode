function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function(root) {
   let deep=1
   var getDeep=function(node){
       if(node.left!=null&&node.right!=null){
           
       }
       
   }
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
 