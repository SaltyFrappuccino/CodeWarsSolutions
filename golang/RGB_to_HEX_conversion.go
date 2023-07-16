// https://www.codewars.com/kata/513e08acc600c94f01000001

package main

import (
	"fmt"
)

func clamp(value, min, max int) int {
	if value < min {
		return min
	}
	if value > max {
		return max
	}
	return value
}

func RGB(r, g, b int) string {
	r = clamp(r, 0, 255)
	g = clamp(g, 0, 255)
	b = clamp(b, 0, 255)

	red := fmt.Sprintf("%02X", r)
	green := fmt.Sprintf("%02X", g)
	blue := fmt.Sprintf("%02X", b)

	return red + green + blue
}

func main() {
	fmt.Println(RGB(234, 27, 248))
}
