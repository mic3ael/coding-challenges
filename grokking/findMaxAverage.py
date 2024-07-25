class Solution:
    # time: O(n), space: (1)
    def findMaxAverage(self, nums, k):
        if not nums:
            return 0.0
        if len(nums) < k:
            return 0.0

        sWindowIdx = 0
        eWindowIdx = 0

        currentSum = 0
        # Initialize the sliding window
        while eWindowIdx < k:
            currentSum += nums[eWindowIdx]
            eWindowIdx += 1

        maxSum = currentSum

        # Slide the window across the array
        while eWindowIdx < len(nums):
            currentSum -= nums[sWindowIdx]
            currentSum += nums[eWindowIdx]
            sWindowIdx += 1
            eWindowIdx += 1
            maxSum = max(maxSum, currentSum)

        return float(maxSum) / k


# Test the solution with example inputs
solution = Solution()

# Example 1
nums1 = [1, 2, 3, 4, 5, 6]
k1 = 2
print("Expected: 5.5, Output:", solution.findMaxAverage(nums1, k1))

# Example 2
nums2 = [0, 1, 1, 3, -1, 10, -2]
k2 = 3
print("Expected: 4.0, Output:", solution.findMaxAverage(nums2, k2))

# Example 3
nums3 = [-5, -2, 0, 3, 9, -1, 2]
k3 = 4
print("Expected: 3.25, Output:", solution.findMaxAverage(nums3, k3))

nums4 = [0, 1, 1, 3, -1, 10, -2]
k4 = 3
print("Expected: 4.0, Output:", solution.findMaxAverage(nums4, k4))
