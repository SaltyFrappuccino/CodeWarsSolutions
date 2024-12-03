// https://www.codewars.com/kata/559a28007caad2ac4e000083/solutions/php

<?php

function perimeter($n) {
    $fib = [1, 1]; 
    for ($i = 2; $i <= $n; $i++) {
        $fib[] = $fib[$i - 1] + $fib[$i - 2]; 
    }
    $sum = array_sum($fib); 
    return 4 * $sum; 
}
