
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let result=true
    function traverse(p,q){
        if(p==null&& q==null){
            return
        }else if(p==null||q==null){
            result=false
            return
        }
        if(p.val==q.val){
            traverse(p.left,q.left)
            // console.log(result)
            traverse(p.right,q.right)
        }else{
            result=false
            return
        }
    }
    traverse(p,q)
    return result
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

//中序遍历一棵树
var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
let p=makeTree([0,-5])
let q=makeTree([0,-5])
console.log(isSameTree(p,q))