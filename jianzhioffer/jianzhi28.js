/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isSymmetric = function (root) {
    if (root == null) {
        return true
    }

    function check(left, right) {
        if (left == null && right == null) {
            return true
        }
        if(left==null || right ==null ||left.val!=right.val){
           return false
        }
        return check(left.left,right.right)&&check(left.right,right.left)
    }
    return check(root.left,root.right)
};
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
console.log(isSymmetric([1,2,2,3,4,4,3]))