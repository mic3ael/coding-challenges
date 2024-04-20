package main

import (
	"fmt"
	"math"
)

type Solution struct{}

func main() {
	s := &Solution{}
	fmt.Println("value: ", s.findLength("aaaaa", 1))
}

func (s *Solution) findLength(str string, k int) int {
	windowStartIdx := 0
	windowEndIdx := 0
	visited := make(map[string]int)
	result := 1
	for windowStartIdx < len(str) && windowEndIdx < len(str) {
		_, ok := visited[string(str[windowEndIdx])]
		if !ok {
			visited[string(str[windowEndIdx])] = 0
		}

		visited[string(str[windowEndIdx])] += 1

		if len(visited) <= k {
			windowEndIdx++
			continue
		}

		times := visited[string(str[windowStartIdx])]
		result = int(math.Max(float64(result), float64(windowEndIdx-windowStartIdx)))
		if times > 1 {
			visited[string(str[windowStartIdx])] -= 1
		} else {
			delete(visited, string(str[windowStartIdx]))
		}
		windowStartIdx++
		windowEndIdx++
	}

	return int(math.Max(float64(result), float64(windowEndIdx-windowStartIdx)))
}
