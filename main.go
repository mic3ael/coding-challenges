package main

import (
	"fmt"
	"grokking/grokking"
)

func main() {
	s := &grokking.Solution{}
	// fmt.Println("findLength: ", s.FindLength("aaaaa", 1))
	fmt.Println("findMinSubArray: ", s.FindMinSubArray(10, []int{1, 1, 1}))
	trieS := &grokking.TrieSolution{}
	// trieS.Insert("")
	// trieS.Insert("apple")
	// fmt.Println("trieS.Search: ", trieS.Search("apple"))
	// fmt.Println("trieS.Search: ", trieS.Search("app"))
	// fmt.Println("trieS.StartsWith: ", trieS.StartsWith("app"))
	// trieS.Insert("app")
	// fmt.Println("trieS.Search: ", trieS.Search("app"))

	trieS.Insert("raspberry")
	trieS.Insert("rascal")
	fmt.Println("StartsWith: ", trieS.StartsWith("rasp"))
	// fmt.Println("StartsWith: ", trieS.StartsWith("rasca"))
}
