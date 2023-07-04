// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

package main

import "fmt"

func RoundToNext5(n int) int {
	for true {
		if n%5 == 0 {
			return n
		} else {
			n += 1
		}
	}
	return n
}

func main() {

	fmt.Println(RoundToNext5(12))

}
