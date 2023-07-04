/*
You are given a string s containing one or more words. Every consecutive pair of words is separated by a single space ' '.

A string t is an anagram of string s if the ith word of t is a permutation of the ith word of s.

For example, "acb dfe" is an anagram of "abc def", but "def cab" and "adc bef" are not.
Return the number of distinct anagrams of s. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: s = "too hot"
Output: 18
Explanation: Some of the anagrams of the given string are "too hot", "oot hot", "oto toh", "too toh", and "too oht".
Example 2:

Input: s = "aa"
Output: 1
Explanation: There is only one anagram possible for the given string.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and spaces ' '.
There is single space between consecutive words.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var countAnagrams = function(s) {
    // anagrams: 
    let arr = s.split(' ');
    let ans = BigInt(1);
    for (const s1 of arr) {
        console.log(s1.length);
        const d1 = {};
        for(const ch of s1) {
            if(d1[ch]) d1[ch] +=1;
            else d1[ch] = 1;
        }
        // let mltiFactor = fact2(s1.length);
        let mltiFactor;
        // console.log(d1);
        let max=0, maxKey;
        for(const key of Object.keys(d1)) {
            if(d1[key] > max) {
                max = d1[key];
                maxKey = key;
            }
        }
        mltiFactor = fact3(s1.length, max);
        delete d1[maxKey];
        for (const val of Object.values(d1)) {
            mltiFactor = mltiFactor / fact2(val);
        }
        ans = ans * mltiFactor;
    }
    return ans % BigInt(10**9 + 7);
    // return f(100).toString();
    // return ans; 
};

const fact = {
    0:'1'
};
const factorial = (n)=>{
    if(fact[n]) return fact[n];
    fact[n] = (BigInt(n) * BigInt(factorial(n-1))).toString();
    return fact[n];
}

const fact2 = (n)=> {
    let ans = BigInt(1);
    let m = n;
    while(m>0){
        ans = ans*BigInt(m);
        m= m-1;
    }
    return ans;
}


const fact3 = (n, s)=> {
    let ans = BigInt(1);
    let m = n;
    while(m>s){
        ans = ans*BigInt(m);
        m= m-1;
    }
    return ans;
}

console.log(fact3(10,10));


console.time('fact2');
console.log(fact2(10000) % BigInt(10**9 + 7));
console.timeEnd('fact2');



console.time('countana');
console.log(countAnagrams(require('./other/testCountAnagrams').b));
console.timeEnd('countana');


