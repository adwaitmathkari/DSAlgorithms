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
    let maxLength = 0;
    let maxSubstring = '';
    for (let i = 0; i < s.length; i++) {
        const longestSubstringVal = longestSubstring(s.substring(i));
        if (longestSubstringVal.length > maxLength) {
            maxLength = longestSubstringVal.length;
            maxSubstring = longestSubstringVal;
        }
    }

    return maxSubstring.length;

};

const longestSubstring = (s) => {
    const o = {};
    for (let i = 0; i < s.length; i++) {
        if (o[s[i]]) {
            // console.log(s.substring(0, i));
            return s.substring(0, i);
        } else{
            o[s[i]] = true;
        }
    }
    // console.log(s)
    return s;
}

// longestSubstring('pwertahb');
for (const str of ['pwwkewtr', 'aabbccdfghjjoo', 'klmnopqrstuv', 'mkjmkjmkjmkj']){

    console.log(lengthOfLongestSubstring(str));
}
// console.log('012345'.substring(0, 5));




