function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function(root) {
   if(!root) return 0
   let queue=[]
   queue.push(root)
   let deep=1
   while(queue.length!=0){
       let size=queue.length
       for(let i=0;i<size;i++){
           let temp=queue.shift()
           if(temp.left){
               queue.push(temp.left)
            }
           if(temp.right){
               queue.push(temp.right)
           }
           if(temp.left==null&&temp.right==null){
               console.log("temp"+temp.val)
               return deep
           }
       }
       deep++
   }
   return deep
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
 let tree=makeTree([2,null,3,null,4,null,5,null,6])
 console.log(tree)
 console.log(minDepth(tree))