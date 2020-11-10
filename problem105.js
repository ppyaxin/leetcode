function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorde
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0) return null
    var getTree=function(begin, end) {
        if(begin>end){
            return null
        }
        let root = new TreeNode(preorder.shift())
        let rootInorder = getIndex(inorder,root.val)
        // console.log(rootInorder)
        let left = rootInorder - 1
        // console.log(left)
        let right = rootInorder + 1
        root.left = getTree(begin, left)
        root.right = getTree(right, end)
        return root
    }
    return getTree(0,preorder.length-1)
};

var getIndex = function (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

let preorder=[3,9,20,15,7]
let inorder=[9,3,15,20,7]
console.log(buildTree(preorder,inorder))
//题解
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) return null;
    //用indexOf获取下标
    let index = inorder.indexOf( preorder[0] );
    let root = new TreeNode( preorder.shift() );
    root.left = buildTree(preorder, inorder.slice(0, index));
    root.right = buildTree(preorder, inorder.slice(index + 1));
    
    return root;
  };
  
