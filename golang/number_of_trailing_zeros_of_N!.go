// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

package main

import "fmt"

func Zeros(n int) int {
	count := 0
	for n > 0 {
		n /= 5
		count += n
	}
	return count
}

func main() {
	fmt.Println(Zeros(30))
}
