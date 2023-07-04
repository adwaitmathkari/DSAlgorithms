/*

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 
Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

"""


# sorting the word list will be helpful
# sorted wordlist can be easily compared to find the word matching the most? 

# match with each possible word
# if you find the next the good otherwise return??
# after deleting the initial word, go on to do the same for the remainging word
# easy
# set up the recursion

# to hash all the words in the word dict and then compare hashes?? is that a good idea? 
# Will need to probably check according to length? each time? 

# recursive seems a bit long 
# I see how DP will be useful - just check if it is possible to split the string into words or not
# if it is already proven that it is not possible then you can return false directly in that case. 
#  
# hash all in the word dict and then go from 1 to 20 to see what all matches

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let maxLen = 0;
    const truthSet = { ''  : true};
    for (const w of wordDict){
        if (w.length > maxLen) {
            maxLen = w.length;
        }
    }
    const set1 = new Set(wordDict);

    return eval(s, set1, maxLen, truthSet);

};

const eval = (s, set1, maxLen, truthSet) => {
    if (truthSet[s] === true || truthSet[s]=== false) return truthSet[s];
    for(let ln = 1; ln < maxLen + 1; ln ++) {
        if (s.length < ln) break;
        // console.log(s.substring(0, ln))
        if (set1.has(s.substring(0, ln))) {
            const newS = s.substring(ln);
            // console.log(newS)
            const newSEval = eval(newS, set1, maxLen, truthSet);
            if (newSEval) {
                truthSet[s] = true;
                return true;
            }
        }
    }

    truthSet[s] = false;
    return false;

}


console.log(wordBreak( s = "applepenapple", wordDict = ["apple","pen"]));

console.log(wordBreak( s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]));