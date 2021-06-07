/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//自顶向下
var invertTree = function (root) {
    let result=root
    function invert(root) {
        if (root == null) {
            return
        }
        let temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.left)
        invertTree(root.right)
    }
    invert(root)
    return result
};
//自底向上
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
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
let tree = makeTree([4, 2, 7, 1, 3, 6, 9])
console.log(invertTree(tree))