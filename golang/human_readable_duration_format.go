// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/go

package main

import (
	"fmt"
	"strings"
)

func FormatDuration(seconds int64) string {
	var result []string

	units := []string{"year", "day", "hour", "minute", "second"}
	divisors := []int64{31536000, 86400, 3600, 60, 1}

	for i, divisor := range divisors {
		value := seconds / divisor
		if value > 0 {
			unit := units[i]
			if value > 1 {
				unit += "s"
			}
			result = append(result, fmt.Sprintf("%d %s", value, unit))
			seconds %= divisor
		}
	}

	switch len(result) {
	case 0:
		return "now"
	case 1:
		return result[0]
	case 2:
		return result[0] + " and " + result[1]
	default:
		return strings.Join(result[:len(result)-1], ", ") + " and " + result[len(result)-1]
	}
}

func main() {
	print(FormatDuration(3662))
}
