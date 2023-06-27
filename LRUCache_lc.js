/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity. 

Constraints:

1 <= capacity <= 3000
0 <= key <= 10^4
0 <= value <= 10^5
At most 2 * 10^5 calls will be made to get and put.

*/



// LRU cache


// cache size
// if cache size limit is reached, then the least recently used ele should be evicted

/**
Brute force:
if key a then shift its value to the latest value - unique value
the last unique value should be deleted

always keep the reference to the last used value? That is a bit tough.


    a, b, c, d, e, f, g

    b, c,d,b,a,a,f,b,d,a,c  h

    maintain in a sequential manner - if b is used then pick up b and pull it to the start of the list

    the one which was not used recently 



    maintain date and do a binary search on the one that is used last 
    
    always update a key with the last get call time in seconds? 
    and maintain a sorted list - hash table - hash aech key 
    keep the things sorted in some place? 

 */

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
    this.cache = {};
    this.size = 0;
    this.capacity = capacity;
    this.leastRecent = null;
    this.mostRecent = null;
};

class Node {
    constructor(key, val, next, prev) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const mostRecent = this.mostRecent;

    if (!this.cache[key]) return -1;
    if (this.size === 1) return this.cache[key].val;

    // fix the order of the linkedlist
    const node1 = this.cache[key];

    // case where node1 is the mostRecent node
    if (!node1.next) return this.cache[key].val;

    // case where node1 is the leastRecent node
    if (!node1.prev) {
        this.leastRecent = node1.next;
        node1.next.prev = null;
        node1.next = null;
        node1.prev = mostRecent;
        mostRecent.next = node1;
        this.mostRecent = node1;
        return this.cache[key].val;
    }

    // general case
    node1.prev.next = node1.next;
    node1.next.prev = node1.prev;
    node1.next = null;
    node1.prev = mostRecent;
    mostRecent.next = node1;
    this.mostRecent = node1;
    return this.cache[key].val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const cache = this.cache;
    if (this.cache[key]) {
        // set the cache value in object
        this.cache[key].val = value;
        this.get(key);
        return;
    }
    const node1 = new Node(key, value, null, null);
    if (this.size === 0) {
        this.leastRecent = node1;
        cache[key] = node1;
        this.mostRecent = node1;
        this.size++;
        return;
    }
    // if maximum capacity then remove and then remove leastRecent
    if (this.size === this.capacity) {
        if (this.capacity === 1) {
            delete cache[this.leastRecent.key];
            this.leastRecent = node1;
            cache[key] = node1;
            this.mostRecent = node1;
            return;
        }
        // need to evict
        const leastRecent = this.leastRecent;
        this.leastRecent = leastRecent.next;
        leastRecent.next.prev = null;
        delete this.cache[leastRecent.key];
        this.mostRecent.next = node1;
        node1.prev = this.mostRecent;
        this.mostRecent = node1;
        cache[key] = node1;
        return;
    }

    cache[key] = node1;
    this.mostRecent.next = node1;
    node1.prev = this.mostRecent;
    this.mostRecent = node1;
    this.size++;
    return;

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const c = new LRUCache(6);
c.put(1, 11);
c.put(2, 22);
c.put(3, 33);
console.log(c.get(1));
c.put(4, 44);
c.put(5, 55);
c.get(4);
c.get(23);
c.get(2);
c.put(6, 66);
c.put(7, 77);
console.log(c);


const c2 = new LRUCache(2);
c2.put(1,1);
c2.put(2,2);
c2.get(1);
c2.put(3,3);
console.log(c2.get(2));
c2.put(4,4);
c2.get(1);
console.log(c2.get(3));
console.log(c2.get(4));
// console.log(c2.get(2));
console.log(c2);

