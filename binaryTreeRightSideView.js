/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)

}
/**Given the root of a binary tree, 
 * imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom. */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var rightSideView = function (root) {
    let nextLevel = [];
    let rightView = [];
    let level = [root,];
    if (!root) return [];
    while (level.length != 0) {
        rightView.push(level[0].val)
        for (let node of level) {
            if (node.right) {
                nextLevel.push(node.right)
            }
            if (node.left) {
                nextLevel.push(node.left)
            }
        }
        level = [...nextLevel];
        nextLevel = [];
    }
    return rightView;
};


let root = new TreeNode(1);
root.right = new TreeNode(3)
root.left = new TreeNode(2);
root.right.right = new TreeNode(4);
root.left.right = new TreeNode(5, new TreeNode(7));


for (node of (rightSideView(root))) {
    console.log(node.val)
}