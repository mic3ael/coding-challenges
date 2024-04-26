package grokking

type TrieNodeObj struct {
	Children map[string]*TrieNodeObj
	IsEnd    bool
}

var root *TrieNodeObj = &TrieNodeObj{Children: make(map[string]*TrieNodeObj), IsEnd: false}

type PairsSolution struct{}

// time: O(n*l) when n is the number of words and l is the average length of the words
// space: O(n*l)
func insert(word string) {
	current := root
	for i := 0; i < len(word); i++ {
		letter := string(word[i])
		_, ok := current.Children[letter]

		isEnd := false

		if len(word)-1 == i {
			isEnd = true
		}

		if !ok {
			current.Children[letter] = &TrieNodeObj{Children: make(map[string]*TrieNodeObj), IsEnd: isEnd}
		}

		current = current.Children[letter]
	}

	current.IsEnd = true
}

// IndexPairs finds all index pairs of substrings in the text that match any word in the trie
func (s PairsSolution) IndexPairs(text string, words []string) [][]int {

	for i := 0; i < len(words); i++ {
		insert(string(words[i]))
	}

	var result [][]int
	for i := 0; i < len(text); i++ {
		current := root
		for j := i; j < len(text); j++ {
			letter := string(text[j])
			next, ok := current.Children[letter]

			if !ok {
				break
			}

			if next.IsEnd {
				result = append(result, []int{i, j})
			}

			current = next
		}
	}

	return result
}
