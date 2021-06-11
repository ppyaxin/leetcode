/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
    //preorder 根左右
    //inorder 左根右
    //返回null
    if(preorder.length==0) return null
    let length=preorder.length
    let root=new TreeNode(preorder[0]) 
    let rootposition
    for(let i=0;i<inorder.length;i++){
        if(inorder[i]==root.val){
            rootposition=i
            break
        }
    }
    let leftTree=buildTree(preorder.slice(1,rootposition+1),inorder.slice(0,rootposition))
    let rightTree=buildTree(preorder.slice(rootposition+1,length),inorder.slice(rootposition+1,length))
    root.left=leftTree
    root.right=rightTree
    return root
};
let preorder=[3,9,20,15,7]
let inorder = [9,3,15,20,7]
console.log(buildTree(preorder,inorder))
