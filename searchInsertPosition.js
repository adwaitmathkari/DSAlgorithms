

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // binary right
    // go to middle element, maybe with pointers? 
    // if it is smaller than the middle element then go to the middle of the left element
    // otherwise the middle of the right--
    // the mid element - left + right // 2
    if (target > nums[nums.length - 1]) return nums.length;
    if (target <= nums[0]) return 0;
    return search(nums, target, 0, nums.length - 1);
};

const search = function (nums, target, left, right) {
    // console.log('indexes', left, right);
    if ((right - left) === 1) {
        if (target === nums[left]) {
            return left;
        } else {
            return right;
        }
    }

    const mid = Math.floor((right - left + 1) / 2) + left;

    if (target > nums[mid]) {
        return search(nums, target, mid, right);
    } else {
        return search(nums, target, left, mid);
    }

}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 27, 29, 30, 31, 32, 33, 34, 56, 89, 110, 111];
let target = 112;

const manualSearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
        if (nums[i] > target) return i;
    }
    return nums.length;
}

console.log(nums.length);
console.log(searchInsert(nums, target));
console.log(manualSearch(nums, target));
