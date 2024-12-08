// https://www.codewars.com/kata/5868a68ba44cfc763e00008d/train/go

package kata

import (
	"strings"
)

func Interpreter(code string, iterations, width, height int) string {
	grid := make([][]int, height)
	for i := range grid {
		grid[i] = make([]int, width)
	}
	x, y := 0, 0

	filteredCode := ""
	jumpMap := make(map[int]int)
	stack := []int{}

	for _, c := range code {
		if strings.ContainsRune("nesw*[]", c) {
			filteredCode += string(c)
		}
	}

	for i, c := range filteredCode {
		if c == '[' {
			stack = append(stack, i)
		} else if c == ']' {
			if len(stack) == 0 {
				return generateGrid(grid)
			}
			openIndex := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			jumpMap[openIndex] = i
			jumpMap[i] = openIndex
		}
	}
	if len(stack) > 0 {
		return generateGrid(grid)
	}

	pointer, count := 0, 0

	for pointer < len(filteredCode) && count < iterations {
		command := rune(filteredCode[pointer])

		switch command {
		case '*':
			grid[y][x] ^= 1
		case 'n':
			y = (y - 1 + height) % height
		case 'e':
			x = (x + 1) % width
		case 's':
			y = (y + 1) % height
		case 'w':
			x = (x - 1 + width) % width
		case '[':
			if grid[y][x] == 0 {
				pointer = jumpMap[pointer]
			}
		case ']':
			if grid[y][x] != 0 {
				pointer = jumpMap[pointer]
			}
		}

		pointer++
		count++
	}

	return generateGrid(grid)
}

func generateGrid(grid [][]int) string {
	var result strings.Builder
	for _, row := range grid {
		for _, cell := range row {
			result.WriteByte('0' + byte(cell))
		}
		result.WriteString("\r\n")
	}
	finalResult := result.String()
	return finalResult[:len(finalResult)-2]
}
