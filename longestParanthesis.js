/*
Given a string containing just the characters '(' and ')', 
return the LENGTH of the longest valid (well-formed) parentheses 
substring
 

Example 
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
*/



/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        const longestFromI = longestFromStart(s.slice(i));
        longest = Math.max(longestFromI, longest);
        if (longest > s.length - i + 1 ) break;
    }
    return longest;
};

const longestFromStart = (s) => {
    let sum = 0;
    const d = {
        '(': 1,
        ')': -1
    }
    let ln = 0;
    let longest = 0;
    for (const ch of s) {
        ln++;
        sum += d[ch];
        if (sum < 0) break;
        if (sum === 0) longest = ln;
    }

    return longest;
}

const par = '((())()()))(())(()'
console.log(longestValidParentheses(par));


// longest valid paranthesis
console.log('something');