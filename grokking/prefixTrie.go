package grokking

import (
	"fmt"
)

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

// Inserts a word into the trie.
// time: O(n), space: O(n)
func (s *TrieSolution) Insert(word string) {
	if s.root == nil {
		s.root = &TrieNode{Children: [26]*TrieNode{}, IsEnd: false}
	}
	current := s.root
	for i := 0; i < len(word); i++ {
		letterIdx, err := toNumber(word[i])
		if err != nil {
			return
		}

		if current.Children[letterIdx] == nil {
			current.Children[letterIdx] = &TrieNode{Children: [26]*TrieNode{}}
		}

		current = current.Children[letterIdx]
	}
	current.IsEnd = true
	// fmt.Println("s.root[1]: ", s.root.Children[1])
}

// Returns if the word is in the trie.
// time: O(n), space: 1
func (s *TrieSolution) Search(word string) bool {
	if s.root == nil {
		return false
	}

	current := s.root

	for i := 0; i < len(word); i++ {
		letterIdx, err := toNumber(word[i])

		if err != nil {
			return false
		}

		if current.Children[letterIdx] == nil {
			return false
		}

		current = current.Children[letterIdx]
	}

	return current.IsEnd
}

// Returns if there is any word in the trie that starts with the given prefix.
// time: O(n), space: O(1)
func (s *TrieSolution) StartsWith(prefix string) bool {
	if s.root == nil {
		return false
	}

	current := s.root

	for i := 0; i < len(prefix); i++ {
		letterIdx, err := toNumber(prefix[i])

		if err != nil {
			return false
		}
		if current.Children[letterIdx] == nil {
			return false
		}

		current = current.Children[letterIdx]
	}

	return true
}
