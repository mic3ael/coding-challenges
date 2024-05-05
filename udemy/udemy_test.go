package udemy

import (
	"testing"
)

func TestTwoNumberSum(t *testing.T) {
	result := twoNumberSum([]int{1, 3, 7, 9, 2}, 11)
	expected := [2]int{9, 2}
	for i := 0; i < len(result); i++ {
		if result[i] != expected[i] {
			t.Errorf("twoNumberSum([]int{1, 3, 7, 9, 2}, 11) = %d; want %d", result[i], expected[i])
		}
	}
}
