// https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/go

package main

import (
	"fmt"
	"sort"
	"strconv"
)

func NextSmaller(n int) int {
	digits := []rune(strconv.Itoa(n))
	length := len(digits)

	i := length - 1
	for i > 0 && digits[i-1] <= digits[i] {
		i--
	}

	if i == 0 {
		return -1
	}

	j := length - 1
	for j > i-1 && digits[j] >= digits[i-1] {
		j--
	}

	digits[i-1], digits[j] = digits[j], digits[i-1]

	reverse := digits[i:]
	sort.Slice(reverse, func(i, j int) bool {
		return reverse[i] > reverse[j]
	})

	result, _ := strconv.Atoi(string(digits))

	if len(strconv.Itoa(result)) < len(digits) {
		return -1
	}

	return result
}

func main() {
	fmt.Println(NextSmaller(21))
	fmt.Println(NextSmaller(531))
	fmt.Println(NextSmaller(2071))
	fmt.Println(NextSmaller(9))
	fmt.Println(NextSmaller(111))
	fmt.Println(NextSmaller(135))
	fmt.Println(NextSmaller(1027))
}
