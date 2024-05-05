package udemy

func twoNumberSum(numbers []int, target int) *[2]int {
	visited := make(map[int]bool)

	for i := 0; i < len(numbers); i++ {
		restVal := target - numbers[i]

		_, ok := visited[restVal]

		if !ok {
			visited[numbers[i]] = true
			continue
		}

		return &[2]int{restVal, numbers[i]}
	}
	return nil
}
