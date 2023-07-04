// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

package main

import (
	"fmt"
	"strings"
)

func Parse(data string) []int {
	var n int
	n = 0
	arr := strings.Split(data, "")

	var finalArr []int

	for i := 0; i < len(arr); i++ {
		if arr[i] == "i" {
			n += 1
		} else if arr[i] == "d" {
			n -= 1
		} else if arr[i] == "s" {
			n *= n
		} else if arr[i] == "o" {
			finalArr = append(finalArr, n)
		}
	}

	return finalArr
}

func main() {
	fmt.Println(Parse("iiisdoso"))
}
