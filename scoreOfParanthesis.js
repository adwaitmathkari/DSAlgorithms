/*
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
*/


/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    console.log('processing', s)
    if (s === '()') {
        return 1
    }
    sum = 0;
    ele = '';
    ans = 0
    elements = []
    for (let char of s) {
        ele += char
        if (char === '(') {
            sum += 1
        } else if (char === ')') {
            sum -= 1
        }

        if (sum === 0) {
            elements.push(ele)
            ele = ''
        }
    }

    if (elements.length === 1) {
        return 2 * scoreOfParentheses(s.substring(1, s.length - 1))
    } else {
        elements.forEach(e => ans += scoreOfParentheses(e))
        return ans
    }
};

console.log(scoreOfParentheses('(((())))()(()))'))