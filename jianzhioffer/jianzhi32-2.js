/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var levelOrder = function (root) {
    let result = []
    let queue = []
    if (root != null) queue.push(root)
    while (queue.length > 0) {
        let res = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let temp = queue.shift()
            res.push(temp.val)
            if (temp.left) {
                queue.push(temp.left)
            }
            if (temp.right) {
                queue.push(temp.right)
            }
        }
        result.push(res)
    }
    return result
};
//之字形
var levelOrder1 = function (root) {
    let result = []
    let queue = []
    if (root != null) queue.push(root)
    let deep = 1
    while (queue.length > 0) {
        // console.log(deep)
        let res = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let temp
            if (deep % 2 == 0) {
                temp = queue.pop()

                if (temp.right) {
                    queue.unshift(temp.right)
                }
                if (temp.left) {
                    queue.unshift(temp.left)
                }
            } else {
                temp = queue.shift()
                if (temp.left) {
                    queue.push(temp.left)
                }
                if (temp.right) {
                    queue.push(temp.right)
                }
            }
            res.push(temp.val)
        }
        deep += 1
        result.push(res)
    }
    return result
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

console.log(levelOrder1(makeTree([1, 2, 3, 4, null, null, 5])))