/*
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
Example 2:

Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []
 

Constraints:

1 <= s.length <= 20
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 10
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
Input is generated in a way that the length of the answer doesn't exceed 105.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

let solutions = [];
var wordBreak = function (s, wordDict) {
    const d = new Set(wordDict);
    const cache = {};
    let soln = [];
    // const solutions = [];
    recur(s, d, cache, soln);
    return solutions.map(s=> s.join(' '));

};

const recur = (s, d, cache, soln) => {

    // if (cache[s]) return cache[s];
    for (let i = 1; i < s.length + 1 ; i++) {
        if (d.has(s.substring(0, i))){
            let soln1 = [...soln];
            soln1.push(s.substring(0, i));
            console.log(s.substring(0, i), s.substring(i));
            if(i === s.length ){
                solutions.push(soln1);
            } else {
                recur(s.substring(i), d, cache, soln1);
            }
        }
    }
    // cache[s] = ans;
    return;
}
// f(s) = f(s-firstWord) + f(s-secondword) + f(s-thirdWord) + ...

const s = "pineapplepenapple", 
wordDict = ["apple","pen","applepen","pine","pineapple"]

console.log(wordBreak(s, wordDict))