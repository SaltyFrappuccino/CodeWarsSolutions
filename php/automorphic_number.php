// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/php

<?php

function automorphic(int $n): string {
    $square = $n * $n;

    $numberStr = (string)$n;
    $squareStr = (string)$square;

    if (str_ends_with($squareStr, $numberStr)) {
        return "Automorphic";
    } else {
        return "Not!!";
    }
}