// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/php

<?php

function moveZeros(array $items): array
{
    $nonZeroItems = [];
    $zeroItems = [];

    foreach ($items as $item) {
        if ($item === 0 || $item === 0.0) {
            $zeroItems[] = intval($item);
        } else {
            $nonZeroItems[] = $item; 
        }
    }

    return array_merge($nonZeroItems, $zeroItems);
  }