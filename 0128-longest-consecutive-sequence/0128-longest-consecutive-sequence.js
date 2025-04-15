/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    // If the array is empty, return 0
    if (nums.length === 0) return 0;
    
    // Create a Set for O(1) lookups
    const numSet = new Set(nums);
    
    let longestStreak = 0;

    // Iterate through each unique number in the set
    for (let num of numSet) {
        // Only check numbers that could be the start of a sequence
        // A number is the start of a sequence if there's no number before it (num - 1)
        if (!numSet.has(num - 1)) {
            // Found a potential start of a sequence
            let currentNum = num;
            let currentStreak = 1;

            // Keep checking for consecutive numbers in the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak if current is longer
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};