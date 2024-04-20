package main

import (
	"fmt"
	"grokking/grokking"
)

func main() {
	s := &grokking.Solution{}
	// fmt.Println("findLength: ", s.FindLength("aaaaa", 1))
	fmt.Println("findMinSubArray: ", s.FindMinSubArray(10, []int{1, 1, 1}))
}
