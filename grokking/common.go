package grokking

import "fmt"

type Solution struct{}

type TrieNode struct {
	Children [26]*TrieNode // Represents each letter of the alphabet.
	IsEnd    bool          // Flag to represent if the node is the end of a word.
}

type TrieSolution struct {
	root *TrieNode
}

func toNumber(char byte) (byte, error) {
	if char < 97 && char > 123 {
		return 0, fmt.Errorf("char has a wrong value")
	}

	return char % 96, nil
}
