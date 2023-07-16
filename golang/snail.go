// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

package main

import "fmt"

func Snail(snaipMap [][]int) []int {

	pieceOfShit := []int{}

	if len(snaipMap[0]) == 0 {
		return pieceOfShit
	}

	var result []int
	top, bottom := 0, len(snaipMap)-1
	left, right := 0, len(snaipMap[0])-1

	for top <= bottom && left <= right {
		for i := left; i <= right; i++ {
			result = append(result, snaipMap[top][i])
		}
		top++
		for i := top; i <= bottom; i++ {
			result = append(result, snaipMap[i][right])
		}
		right--
		if top <= bottom {
			for i := right; i >= left; i-- {
				result = append(result, snaipMap[bottom][i])
			}
			bottom--
		}
		if left <= right {
			for i := bottom; i >= top; i-- {
				result = append(result, snaipMap[i][left])
			}
			left++
		}
	}

	return result
}

func main() {
	fmt.Println(Snail([][]int{[]int{}}))
}
