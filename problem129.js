
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let result = 0
    function getNumber(root, count) {
        // console.log(root)
        if (!root) {
            return
        } else {
            count = count * 10 + root.val
            getNumber(root.left, count)
            getNumber(root.right, count)
            if (root.left == null && root.right == null) {
                result += count
            }
            // console.log(count)
        }
    }
    getNumber(root, 0)
    return result
};
let r = new TreeNode(1)
r.left = new TreeNode(2)
r.right = new TreeNode(3)
console.log(sumNumbers(r))
