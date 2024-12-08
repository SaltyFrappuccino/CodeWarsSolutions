// https://www.codewars.com/kata/5868a68ba44cfc763e00008d/train/php

<?php
function interpreter(string $code, int $iterations, int $width, int $height): string {
      $grid = array_fill(0, $height, array_fill(0, $width, 0));
    $x = $y = 0;
    $code = preg_replace('/[^nesw*\[\]]/', '', $code);
    $jump_map = [];
    $stack = [];

    for ($i = 0; $i < strlen($code); $i++) {
        if ($code[$i] == '[') {
            $stack[] = $i;
        } elseif ($code[$i] == ']') {
            if (empty($stack)) throw new Exception("Unmatched closing bracket ']'");
            $open_index = array_pop($stack);
            $jump_map[$open_index] = $i;
            $jump_map[$i] = $open_index;
        }
    }
    if (!empty($stack)) throw new Exception("Unmatched opening bracket '['");

    $pointer = $count = 0;

    while ($pointer < strlen($code) && $count < $iterations) {
        $command = $code[$pointer];

        switch ($command) {
            case '*':
                $grid[$y][$x] = 1 - $grid[$y][$x];
                break;
            case 'n':
                $y = ($y - 1 + $height) % $height;
                break;
            case 'e':
                $x = ($x + 1) % $width;
                break;
            case 's':
                $y = ($y + 1) % $height;
                break;
            case 'w':
                $x = ($x - 1 + $width) % $width;
                break;
            case '[':
                if ($grid[$y][$x] == 0) $pointer = $jump_map[$pointer];
                break;
            case ']':
                if ($grid[$y][$x] != 0) $pointer = $jump_map[$pointer];
                break;
        }

        $pointer++;
        $count++;
    }

    return implode("\r\n", array_map(function ($row) {
        return implode('', $row);
    }, $grid));
}