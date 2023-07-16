// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

function snail(array $array): array {
    $result = [];
    $n = count($array);
    $top = 0;
    $bottom = $n - 1;
    $left = 0;
    $right = $n - 1;

    while ($top <= $bottom && $left <= $right) {
        for ($i = $left; $i <= $right; $i++) {
            if (isset($array[$top][$i])) {
                $result[] = $array[$top][$i];
            }
        }
        $top++;
        for ($i = $top; $i <= $bottom; $i++) {
            if (isset($array[$i][$right])) {
                $result[] = $array[$i][$right];
            }
        }
        $right--;
        if ($top <= $bottom) {
            for ($i = $right; $i >= $left; $i--) {
                if (isset($array[$bottom][$i])) {
                    $result[] = $array[$bottom][$i];
                }
            }
            $bottom--;
        }
        if ($left <= $right) {
            for ($i = $bottom; $i >= $top; $i--) {
                if (isset($array[$i][$left])) {
                    $result[] = $array[$i][$left];
                }
            }
            $left++;
        }
    }

    return $result;
}
