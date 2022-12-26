// https://www.codewars.com/kata/5390bac347d09b7da40006f6/

package main

import (
	"fmt"
	"strings"
)

func ToJadenCase(str string) string {
	var str_arr []string
	var finalStr string

	str_arr = strings.Split(str, "")
	str_arr[0] = strings.ToUpper(str_arr[0])

	for i := 0; i < len(str_arr); i++ {
		if str_arr[i] == " " {
			str_arr[i+1] = strings.ToUpper(str_arr[i+1])
		}
		finalStr += str_arr[i]
	}
	return finalStr
}

func main() {
	fmt.Println(ToJadenCase("How can mirrors be real if our eyes aren't real"))
}
