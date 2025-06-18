
// 2215. Find the difference of two arrays


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const diffNums1 = [...new Set(nums1)].filter(i=> !nums2.includes(i));
    const diffNums2 = [...new Set(nums2)].filter(i=> !nums1.includes(i));
    return [diffNums1, diffNums2]
};