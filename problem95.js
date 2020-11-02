
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    let results = []
    let result = []
    function getTrees(left, right) {
        for (let i = left; i <= right; i++) {
            result.push(i)
            getTrees(i + 1, right)
            getTrees(left, i - 1)
            
        }
    }
};  