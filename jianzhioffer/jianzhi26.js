/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (A == null || B == null) {
        return false
    }
    return check(A,B)|| isSubStructure(A.left,B)|| isSubStructure(A.right,B)
    function check(left, right) {
        if (right == null) {
            return true
        }
        if (left == null) {
            return false
        }
        if (left.val == right.val) {
            return check(left.left, right.left)&&check(left.right, right.right)
            
        } else {
            return false
        }
    }
};