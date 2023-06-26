/**
 * 
 *Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]} strs 

 */


const groupAnagrams = function (strs) {
  const map1 = {};
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (map1[key]) {
      map1[key].push(str);
    } else {
      map1[key] = [str];
    }
  }
  return Object.values(map1);
};


console.log(groupAnagrams(['eaatt', 'tteea', 'ttaee', 'nat', 'ant', 'atate', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));



/* eslint-disable  */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams2 = function (strs) {
  // group the anagrams
  // ["eaatt","tteea","tan","ate","nat","bat"]
  // a2e1t2, a1e2t2, a1n1t1,
  // a1e2t2, a2e1t2,

  // change each word to form of a002
  const newList = strs.map((a) => {
    return format1(a) + ':' + a;
  });
  newList.sort();
  //   console.log(newList);
  let i = 0;
  const finalList = [];
  let grpAna = [];
  let grpAnaToPush = [];
  for (let i = 0; i < newList.length; i++) {
    if (grpAna.length) {
      if (grpAna[0].split(':')[0] === newList[i].split(':')[0]) {
        grpAnaToPush.push(newList[i].split(':')[1]);
        grpAna.push(newList[i])
      } else {
        finalList.push(grpAnaToPush);
        grpAnaToPush = [newList[i].split(':')[1],];
        grpAna = [newList[i],];
      }
    } else {
      grpAnaToPush = [newList[i].split(':')[1],];
      grpAna = [newList[i],];
    }
  }
  finalList.push(grpAnaToPush);
  //   console.log(finalList);
  return finalList;
};

const format1 = (a) => {
  const obj1 = {};
  for (const letter of a) {
    if (obj1[letter]) {
      obj1[letter] += 1;
    } else {
      obj1[letter] = 1;
    }
  }
  let ret = '';
  for (const alp of 'abcdefghijklmnopqrstuvwxyz') {
    if (obj1[alp]) {
      let b;
      if (obj1[alp] < 10) {
        b = '00' + obj1[alp];
      } else if (obj1[alp] < 100) {
        b = '0' + obj1[alp];
      } else {
        b = '' + obj1[alp];
      }
      ret += alp + b;
    }
  }
  return ret;
};

groupAnagrams2(["eaatt", "tteea", 'ttaee', 'nat', 'ant', 'atate', "tan", "ate", "nat", "bat"]);
groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]);