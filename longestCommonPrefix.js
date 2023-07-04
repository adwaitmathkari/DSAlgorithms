/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

// simple - sort? 
// sets
// go on scanning one by one. adding to a set. add
// next word - go on scanning, if in set then continue, if not then thats it. maintain another set of the second one. 
// compare the next words with this set. 

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let commonPrefix = new Set();
    let smallestStr = strs[0];

    for (const str of strs) {
        if (str.length < smallestStr.length){
            smallestStr = str;
        }
    }
    for (let i = 0; i < smallestStr.length; i++) {
        commonPrefix.add(smallestStr.substring(0, i + 1));
    }
    // console.log(commonPrefix);
    for (const str of strs) {
        let set2 = new Set();
        for (let i = 0; i < str.length; i++) {
            let substr = str.substring(0, i+1);
            if(commonPrefix.has(substr)) {
                set2.add(substr);
            } else {
                break;
            }
        }
        commonPrefix = set2;
    }
    let maxln = 0;
    let finalPrefix = '';
    for (const key of commonPrefix.keys()) {
        if (key.length > maxln){
            maxln = key.length;
            finalPrefix = key;
        }
    }

    return finalPrefix;
    
};

console.log(longestCommonPrefix(["flower", "flow", "floght"]));
console.log(longestCommonPrefix(["flower"]));
console.log(longestCommonPrefix(["flower", "flow", "floght", 'f']));