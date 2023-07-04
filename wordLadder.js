/*
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.


*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
*/
var ladderLength = function (beginWord, endWord, wordList) {
    const graph = createGraph(wordList);
    graph.min_ln = Number.POSITIVE_INFINITY;
    graph.pathFound = false;
    console.log(graph, beginWord, endWord)
    recur([beginWord, ], graph, beginWord, endWord);
    return graph.pathFound? graph.min_ln: 0;
};

const recur = (path, graph, word, endWord) => {
    console.log('Starting recur');
    console.log( {path, word, endWord})
    const sw = word;
    const neighbours = new Set();
    for (let i = 0; i < sw.length; i++) {
        const key = sw.substring(0, i) + '#' + sw.substring(i + 1);
        console.log({key}, graph[key]);
        if (graph[key]) {
            graph[key].forEach(k => neighbours.add(k));
        }
    }
    console.log(neighbours);
    const neighboursList = neighbours.keys();
    console.log({neighboursList})
    for (const n of neighboursList) {
        if (n === endWord) {
            path.push(n);
            console.log({path})
            if (path.length < graph.min_ln) {
                graph.min_ln = path.length;
                graph.pathFound = true;
            }
        } else if (path.includes(n)){
            // do nothing
        } else {
            recur([...path, n], graph, n, endWord);
        }
    }
}

const createGraph = (wordList) => {
    const graph = {};
    for (const w of wordList) {
        const sw = w;
        for (let i = 0; i < sw.length; i++) {
            const key = sw.substring(0, i) + '#' + sw.substring(i + 1);
            if (graph[key]) {
                if (!graph[key].includes(w)) {
                    graph[key].push(w);
                }
            } else {
                graph[key] = [w,];
            }
        }
    }
    return graph;
}

const beginWord = "talk", endWord = "tail", wordList = ["talk","tons","fall","tail","gale","hall","negs"];
console.log(ladderLength(beginWord, endWord, wordList))