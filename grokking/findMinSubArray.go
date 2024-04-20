package grokking

import (
	"math"
)

// time: O(n), space: O(1)
func (s *Solution) FindMinSubArray(S int, arr []int) int {
	minLength := math.MaxInt32
	windowStartIdx := 0
	windowEndIdx := 1
	windowSum := arr[windowStartIdx]
	for windowStartIdx < len(arr) && windowEndIdx < len(arr) {
		if windowSum >= S {
			minLength = int(math.Min(float64(minLength), float64(windowEndIdx-windowStartIdx)))
			windowSum -= arr[windowStartIdx]
			windowStartIdx++
			continue
		}
		windowSum += arr[windowEndIdx]
		windowEndIdx++

	}

	if minLength == math.MaxInt32 && windowSum < S {
		return 0
	}

	for windowStartIdx < len(arr) {
		windowSum -= arr[windowStartIdx]
		if windowSum < S {
			break
		}
		windowStartIdx++
	}

	return int(math.Min(float64(minLength), float64(windowEndIdx-windowStartIdx)))
}
