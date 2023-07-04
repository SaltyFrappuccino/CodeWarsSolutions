// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

package main

import (
	"fmt"
	"math"
)

func FindNextSquare(sq int64) int64 {
	if math.Sqrt(float64(sq)) != math.Floor(math.Sqrt(float64(sq))) {
		return -1
	}

	sq += 1

	for i := 0; i < 999999999; i++ {
		if math.Sqrt(float64(sq)) == math.Floor(math.Sqrt(float64(sq))) {
			return sq
		} else {
			sq += 1
		}
	}
	return sq
}

func main() {
	fmt.Println(FindNextSquare(15241383936))
}
