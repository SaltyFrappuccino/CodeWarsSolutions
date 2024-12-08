// https://www.codewars.com/kata/55aa075506463dac6600010d/train/php

<?php
function listSquared($m, $n) {
    $result = [];
    for ($i = $m; $i <= $n; $i++) {
        $sumOfSquares = 0;
        for ($j = 1; $j * $j <= $i; $j++) {
            if ($i % $j === 0) {
                $sumOfSquares += $j * $j;
                if ($j !== $i / $j) {
                    $sumOfSquares += ($i / $j) * ($i / $j);
                }
            }
        }
        if (sqrt($sumOfSquares) == intval(sqrt($sumOfSquares))) {
            $result[] = [$i, $sumOfSquares];
        }
    }

    return $result;
}