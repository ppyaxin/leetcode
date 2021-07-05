/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
//二叉搜索树
//如果两个节点都在左边或者右边，继续遍历
//否则（一个是左一个是右边，即为最近。或者一个是另一方子节点
var lowestCommonAncestor = function (root, p, q) {
   if(p.val<root.val&&q.val<root.val) {
      return lowestCommonAncestor(root.left,p,q)
   }else if(p.val>root.val&&q.val>root.val){
      return lowestCommonAncestor(root.right,p,q)
   }else{
       return root
   }
};