/** 
Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const longestFromI = longestFromStart(s.substring(i));
        if (longestFromI > ans) {
            ans = longestFromI;
        }
    }
    return ans;
};

const longestFromStart = (s)=> {
    const o = {};
    let ln = 0;
    for(const letter of s){
        if (o[letter]){
            return ln;
        } else {
            o[letter] = true;
            ln++;
        }
    }

    return ln;
}

for (const str of ['pwwkewtr', 'aabbccdfghjjoo', 'klmnopqrstuv', 'mkjmkjmkjmkj']){

    console.log(lengthOfLongestSubstring(str));
}