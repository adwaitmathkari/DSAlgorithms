`Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.



`
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxLevelSum1 = function (root) {


    let maxSum = root.val;
    let maxLevel = 1;

    // traverse breadth first and find the level with the maximum sum 

    const alg = (nodes, level) => {
        console.log(nodes)
        if (nodes.length === 0) return;
        let sum1 = 0;
        nodes.forEach(node => {
            sum1 += node.val;
        })
        if (sum1 > maxSum) {
            maxSum = sum1
            maxLevel = level
        }

        let nextNodes = []
        for (let node of nodes) {
            if (node.left) {
                nextNodes.push(node.left)
            }

            if (node.right) {
                nextNodes.push(node.right)
            }
        }


        alg(nextNodes, level + 1);
        return;

    }

    alg([root], 1)
    return maxLevel;
};



