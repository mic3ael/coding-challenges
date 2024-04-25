package grokking

// IndexPairs finds all index pairs of substrings in the text that match any word in the trie
func (s TrieSolution) IndexPairs(text string, words []string) [][]int {
	// time: O(n*l) when n is the number of words and l is the average length of the words
	// space: O(n*l)
	for i := 0; i < len(words); i++ {
		s.Insert(string(words[i]))
	}

	var result [][]int
	var startIdx int
	var endIdx int
	// time: O(t^2) when t is the length of the text
	for endIdx < len(text) {
		word := text[startIdx:endIdx]

		if !s.Search(word) {
			endIdx++
			continue
		}
		result = append(result, []int{startIdx, endIdx - 1})
		startIdx = endIdx
	}

	return result
}
