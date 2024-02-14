/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    // Separate negative (n) and positive (p) numbers into two arrays
    const n = [];
    const p = [];
    for (const i of nums) {
        if (i < 0) {
            n.push(i);
        } else {
            p.push(i);
        }
    }

    // Initialize pointers for iterating through n, p, and nums
    let i = 0, j = 0, k = 0;

    // Interleave positive and negative numbers in the original nums array
    while (i < n.length && j < p.length) {
        // If the current index is even, place a positive number from p
        if (k % 2 === 0) {
            nums[k] = p[j];
            j++;
        }
        // If the current index is odd, place a negative number from n
        else {
            nums[k] = n[i];
            i++;
        }
        k++;
    }

    // If there are remaining negative numbers, append them to nums
    while (i < n.length) {
        nums[k] = n[i];
        i++;
        k++;
    }

    // If there are remaining positive numbers, append them to nums
    while (j < p.length) {
        nums[k] = p[j];
        j++;
        k++;
    }

    // Return the modified nums array with interleaved positive and negative numbers
    return nums;
};